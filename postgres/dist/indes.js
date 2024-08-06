"use strict";
// Creating the connection string and adding the table to the users
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//Inserting data to the table in postgres
const { Client } = require("pg");
// Async function to insert data into a table
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new Client({
            host: "ep-divine-cake-a50bgnxl.us-east-2.aws.neon.tech",
            port: 5432,
            database: "Start",
            user: "Start_owner",
            password: "DblYk0nVC4Be",
        });
        try {
            yield client.connect(); // Ensure client connection is established
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
            const res = yield client.query(insertQuery);
            console.log("Insertion success:", res); // Output insertion result
        }
        catch (err) {
            console.error("Error during the insertion:", err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
insertData();
