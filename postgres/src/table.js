//Inserting data to the table in postgres

const { Client } = require ("pg");

// Async function to insert data into a table
async function insertData() {
  const client = new Client({
    host: "Host name",
    port: 5432,
    database: "Your database",
    user: "Your username",
    password: "Your password",
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
