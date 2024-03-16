//  import { NextResponse, NextRequest } from "next/server";
// import client from "@/db";


// // const client = new PrismaClient();

// // export async function GET(req: NextRequest) {
// //     // To make sure things have reach the Databse 
// //     const user  = await client.user.findFirst();
// //     return NextResponse.json({
// //         username: user?.username,
// //         password: "Nishan",
// //     });
// // }

// export async function POST(req: NextRequest) {
//     // Postgres + Prisma
//     try {
//         // Parsing JSON from the request body
//         const body = await req.json();
//           await client.user.create({
//             data: {
//                 username: body.username,
//                 password: body.password
//             }
//         })
//         console.log(body);
//         // Logging the "Authorization" header of the request
//         console.log(req.headers.get("authorization"));
        
//         // Logging the value of the "name" query parameter in the request URL
//         console.log(req.nextUrl.searchParams.get("name"));

//         // Returning a JSON response indicating successful signup
//         return NextResponse.json({
//             message: "You are signed up",
//         });
//     } catch (error) {
//         // Handling errors that occur during JSON parsing
//         console.error("Error parsing JSON:", error);
        
//         // Returning an appropriate error response
//         return NextResponse.json({
//             error: "Failed to process request",
//         }, { status: 411 }); // Setting status code to 400 Bad Request
//     }

// }
