import { z } from 'zod';

export const createPropertySchemas = z.object({
  name: z.string().min(3).max(12),
  deskription: z.string().min(2).max(15),
  area: z.number().positive(),
});

export type CreateZodPropertyDto = z.infer<typeof createPropertySchemas>;
