import jwt from "jsonwebtoken";
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET;
const AUTH_USER = process.env.AUTH_USER;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;

export const loginService = (email, password) => {
    if (email !== AUTH_USER || password !== AUTH_PASSWORD) {
        const error = new Error("Credenciales incorrectas");
        error.status = 401;
        throw error;
    }

    const token = jwt.sign(
        { email, role: "admin" },
        JWT_SECRET,
        { expiresIn: "2h" }
    );

    return { token, expiresIn: 7200 };
};
