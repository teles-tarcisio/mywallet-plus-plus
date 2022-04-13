/* eslint-disable import/prefer-default-export */

import connection from '../database.js';

export async function getUserByEmail(email) {
  const usersByEmail = await connection.query(
    `SELECT * FROM "users" WHERE email=$1`,
    [email],
  );
  return usersByEmail;
}

export async function createUser(name, email, hashedPassword) {
  const insertNewUser = connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword],
  );
  return insertNewUser;
}
