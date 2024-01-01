import { z } from "zod";
// TODO learn how to use regex to validate schema
export const loginSchema = z.object({
  email: z.string().min(1, "Email é obrigatório!").trim(),
  password: z.string().min(6, "A senha é obriatória!").trim(),
});

export type loginFormData = z.infer<typeof loginSchema>;
