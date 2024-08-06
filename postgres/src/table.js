//Inserting data to the table in postgres

const { Client } = require ("pg");

// Async function to insert data into a table
async function insertData() {
  const client = new Client({
    host: "ep-divine-cake-a50bgnxl.us-east-2.aws.neon.tech",
    port: 5432,
    database: "Start",
    user: "Start_owner",
    password: "DblYk0nVC4Be",
  });

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();
