import { regexs } from "@/app/common/helpers";
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email é obrigatório!")
    .trim()
    .regex(regexs.emailValidationRegex, "O email não é válido"),
  password: z.string().min(6, "A senha é obriatória!").trim(),
});

export type loginFormData = z.infer<typeof loginSchema>;
