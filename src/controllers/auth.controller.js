import { loginService } from "../services/auth.service.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const session = await loginService(email, password);
    res.status(200).json({
      message: "Login successful",
      token: session.token,
      token_type: "Bearer",
      expires_in: session.expiresIn
    });
  } catch (error) {
    next(error);
  }
};
