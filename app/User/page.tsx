// Singleton Prisma Client
import { PrismaClient } from "@prisma/client";
import client from "@/db";
//const client = new PrismaClient(); // Dont create client like this in DEV mode
// // During hotrelado it will clean cache and again recreate the DB connection n gets exhausted
// // Use Singleton Solution
// // Refer to DB.ts file 



async function fetchData() {  // This is anoother simple way to fetch data instead of using GET method
  const user = await client.user.findFirst(); //Prisma will check if any user is created on DB to verify data us getting into DB
  
  return {
    username: user?.username,
    password: "Nishan"
  }

}



// async function fetchData() {
//     const response = await axios.get("http://localhost:3000/api/user");
//     await new Promise(r => setTimeout(r,5000));
//     console.log("response is " + JSON.stringify(response?.data));
//     return  response?.data;

// }

export default async function User(){
    //await new Promise((r) => setTimeout(r,5000));
    const data = await fetchData();

   return ( <div>
        {data.username}
        {data.password}
    </div>
   );
}


