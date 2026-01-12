import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  firstName: z.string().max(1000),
  middleName: z.string().max(1000).optional().nullable(),
  lastName: z.string().max(1000),
  description: z.string().max(1000).optional().nullable(),
  workEmail: z.string().max(1000).optional().nullable(),
  personalEmail: z.string().max(1000).optional().nullable(),
  photos: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AuthorCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.AuthorCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthorCreateWithoutClientInput>;
export const AuthorCreateWithoutClientInputObjectZodSchema = makeSchema();
