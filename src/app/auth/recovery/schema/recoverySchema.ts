import { z } from "zod";
import { regexs } from "@/app/common/helpers";

export const recoverySchema = z.object({
  email: z
    .string()
    .trim()
    .regex(regexs.emailValidationRegex, "O email não é válido"),
});

export type recoveryData = z.infer<typeof recoverySchema>;
