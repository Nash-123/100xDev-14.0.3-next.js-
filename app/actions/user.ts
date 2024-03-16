"use server"
import client from "@/db";
// Using here singleton Prisma CLient

// Setting up server actions instead of using axios.get and post
// we'll be using server actions so use use server at top 

export async function signup(username: string, password: string) {
    // Postgres + Prisma
    try {
       
           await client.user.create({
            data: {
                username: username,
                password: password
            }
        });
        // Returning a JSON response indicating successful signup
        return true
    } catch (error) {
        return false
    }

}
