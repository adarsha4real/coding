import { databases } from "../config/configApp";
import { Permission } from "appwrite";



export default async function createUserCollection() {
    await databases.createUserCollection("users", "Unique ID", [
        "name",
        "email",
        "password",
        "createdAt",
        Permission.read('any'),
        Permission.update('users'),
        Permission.delete('users'),
        Permission.create('users'),
        

    ]);
    console.log("User collection created successfully!");

}
  