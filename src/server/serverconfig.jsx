import {Avatars,client,Account,Databases,Storage,Users} from 'node-appwrite';
let client = new client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL) // Your API Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) // Your project ID
    .setKey(process.env.APPWRITE_API_KEY) // Your secret API key
    
;
const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const account = new Account(client);
const users = new Users(client); 

export { client, account, databases, storage, avatars, users };