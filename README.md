# Singleton Prisma CLient use:- GlobalTHis is used here to ensure that in DEV env during compilation the connection between the Prisma DB and Next server is established only once, This issue is not there in PRoduction .
# Else the connection breaks out 
# Code is present in DB.ts 


# Use of Better Fecthing .
# This is used to avoid use of GET Methods and to use client.user.findFirst(). from prisma client to check if there exist any user in DB   and DB is working or not .



## Server Actions
## This concept is used to make our code more consistent in which we will remove the use of axios.POST and instead we will change our Design a bit and in the design we will implement a server named user.ts in the Next.js server of type "use server" and when post request is done from next.js bakend server it can reach to it as in axios.get it's applicable only for client based component .


// We'll call the server based component named signup from client based component Signup.tsx
Benefits of server actions
Single function can be used in both client and server components
Gives you types of the function response on the frontend (very similar to trpc)
Can be integrated seamlessly with forms (ref https://www.youtube.com/watch?v=dDpZfOQBMaU)
