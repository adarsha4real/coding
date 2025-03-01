import { Client, Databases, Account } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite server endpoint
  .setProject("67bec974003d56663d8a");                // Your Appwrite project ID

const databases = new Databases(client);
const account = new Account(client);

export { client, account, databases };