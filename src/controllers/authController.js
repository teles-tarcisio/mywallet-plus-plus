import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUserByEmail, createUser } from '../repositories/index.js';
import connection from '../database.js';

export async function registerUser(req, res) {
  try {
    const { name, email, password } = res.locals.newUserData;

    const existingUsers = await getUserByEmail(email);

    if (existingUsers.rowCount > 0) {
      return res.sendStatus(409);
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    await createUser(name, email, hashedPassword);

    return res.sendStatus(201);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}

export async function userLogin(req, res) {
  try {
    const { email, password } = res.locals.userData;

    const { rows } = await getUserByEmail(email);
    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.sendStatus(401);
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
    );

    return res.send({
      token,
    });
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}
