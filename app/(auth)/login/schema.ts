import { string, z } from "zod";

export const loginSchema = z.object({
  username: z.string().nonempty({ message: "Username is required" }),
  password: z
    .string()
    .min(8, { message: "Minimum 8 characters" })
    .max(20, { message: "Maximum 20 characters" }),
});

export type loginStateType = {
  errors: {
    username: string;
    password: string;
  };
  message: string;
};
