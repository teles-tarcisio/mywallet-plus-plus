import connection from '../database.js';

export async function getUsersByEmail(email) {
  const usersByEmail = await connection.query(
    `SELECT * FROM "users" WHERE email=$1`,
    [email]
  );
  return usersByEmail;
}