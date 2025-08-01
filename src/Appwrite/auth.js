// src/services/authService.js
import config from "../config.js";
import { Client, Account } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // ADMIN LOGIN
    async login({ email, password }) {
        try {
            await this.account.deleteSessions().catch(err => {
            console.warn("No prior session to delete or failed to delete:", err);
        });
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    }

    // CHECK LOGGED-IN ADMIN
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Get User Error:", error);
            return null;
        }
    }

    // LOGOUT
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Logout Error:", error);
        }
    }
}

const authService = new AuthService();
export default authService;
