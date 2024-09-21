import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const secretKey: string = process.env.SECRET_KEY || "readytovalidatejwt"; // Keep this secret and secure

// Define the User interface for TypeScript
interface User {
  id: number;
}

// Generate a JWT token
export const generateToken = (user: User): string => {
  const payload = { userId: user.id };
  const options: SignOptions = { expiresIn: "1h" };
  console.log("generating ", secretKey);
  return jwt.sign(payload, secretKey, options);
};

// Verify the JWT token
export const verifyToken = (token: string): JwtPayload | null => {
  try {
    console.log(secretKey);
    const data = jwt.verify(token, secretKey) as JwtPayload;

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
