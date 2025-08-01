// src/config.js

const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    mobilesCollectionId: String(import.meta.env.VITE_COLLECTION_MOBILES),
    accessoriesCollectionId: String(import.meta.env.VITE_COLLECTION_ACCESSORIES),
    electronicsCollectionId: String(import.meta.env.VITE_COLLECTION_ELECTRONICS),
    carouselCollectionId: String(import.meta.env.VITE_COLLECTION_CAROUSEL),
    bestsellersCollectionId: String(import.meta.env.VITE_COLLECTION_BESTSELLERS),
};

export default config;