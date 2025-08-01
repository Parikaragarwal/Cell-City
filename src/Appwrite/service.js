// src/appwrite/service.js

import config from "../config";
import { ID, Client, Query, Databases } from "appwrite";

class AppwriteService {
    client = new Client();
    databases;

    constructor() {
        console.log("Appwrite URL:", config.appwriteUrl);
        console.log("Project ID:", config.appwriteProjectId);

        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
    }

    async createDocument(collectionId, data) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                collectionId,
                ID.unique(),  
                data
            );
        } catch (error) {
            console.error(`Error creating document in ${collectionId}:`, error);
            return null;
        }
    }

    async updateDocument(collectionId, documentId, data) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                collectionId,
                documentId,
                data
            );
        } catch (error) {
            console.error(`Error updating document in ${collectionId}:`, error);
            return null;
        }
    }

    async deleteDocument(collectionId, documentId) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                collectionId,
                documentId
            );
            return true;
        } catch (error) {
            console.error(`Error deleting document from ${collectionId}:`, error);
            return false;
        }
    }

    async getDocument(collectionId, documentId) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                collectionId,
                documentId
            );
        } catch (error) {
            console.error(`Error fetching document from ${collectionId}:`, error);
            return null;
        }
    }

    async listDocuments(collectionId, queries = []) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                collectionId,
                queries
            );
        } catch (error) {
            console.error(`Error listing documents from ${collectionId}:`, error);
            return [];
        }
    }
}

const appwriteService = new AppwriteService();
export default appwriteService;
// In your Appwrite service file...

// ... (your existing createDocument, deleteDocument functions)

export const getMobiles = async () => {
  try {
    const response = await appwriteService.listDocuments(
      config.mobilesCollectionId
    );

    // Parse the JSON strings back into objects/arrays for the UI
    const parsedMobiles = response.documents.map(mobile => {
      const specs = JSON.parse(mobile.specsJSON || '{}');
      const colors = JSON.parse(mobile.colorsJSON || '[]');
      const features = JSON.parse(mobile.featuresJSON || '[]');

      return {
        id: mobile.$id,
        brand: mobile.brand,
        model: mobile.model,
        image: mobile.image,
        fiveG: mobile.fiveG,
        price: mobile.price,
        originalPrice: mobile.originalPrice,
        specs,  // Use the parsed object
        colors, // Use the parsed array
        features, // Use the parsed array
        shopData: {
          stockStatus: mobile.stockStatus,
          hasOffer: mobile.hasOffer,
        }
      };
    });

    return parsedMobiles;

  } catch (error) {
    console.error("Appwrite service :: getMobiles :: error", error);
    // It's important to re-throw the error so React Query knows the fetch failed
    throw error;
  }
};
export const getAccessories = async () => {
  try {
    const response = await appwriteService.listDocuments(
      config.accessoriesCollectionId // Use your accessories collection ID from config
    );

    if (!response || !response.documents) {
        throw new Error("Failed to fetch accessories or documents are empty.");
    }

    // Parse the JSON strings back into arrays for the UI
    const parsedAccessories = response.documents.map(accessory => {
      const colors = JSON.parse(accessory.colors || '[]');
      const features = JSON.parse(accessory.features || '[]');

      return {
        id: accessory.$id,
        brand: accessory.brand,
        name: accessory.name,
        type: accessory.type,
        image: accessory.image,
        price: accessory.price,
        originalPrice: accessory.originalPrice,
        colors,
        features,
        shopData: { // Reconstruct shopData for the card
            stockStatus: accessory.stockStatus,
            hasOffer: accessory.hasOffer,
        }
      };
    });

    return parsedAccessories;

  } catch (error) {
    console.error("Appwrite service :: getAccessories :: error", error);
    throw error; // Re-throw the error for React Query
  }
};
