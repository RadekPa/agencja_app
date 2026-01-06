import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  title: z.string(),
  description: z.string().optional().nullable(),
  status: z.string().max(32).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DocumentCreateManyClientInputObjectSchema: z.ZodType<Prisma.DocumentCreateManyClientInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentCreateManyClientInput>;
export const DocumentCreateManyClientInputObjectZodSchema = makeSchema();
