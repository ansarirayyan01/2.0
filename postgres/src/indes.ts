// Creating the connection string and adding the table to the users

// import { Client } from 'pg'
 
// const client = new Client({
//     //postgresql://postgres:password@localhost/postgres
//   connectionString: "postgresql://Start_owner:DblYk0nVC4Be@ep-divine-cake-a50bgnxl.us-east-2.aws.neon.tech/Start?sslmode=require"
// })


// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsersTable()


