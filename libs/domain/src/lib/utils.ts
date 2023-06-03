import { z } from "zod";

export const coerceIdSchema = z.object({
  id: z.coerce.number().positive().int(),
});
export const idSchema = z.number().positive().int();
