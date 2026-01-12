import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  firstName: z.string(),
  middleName: z.string().optional().nullable(),
  lastName: z.string(),
  description: z.string().optional().nullable(),
  workEmail: z.string().optional().nullable(),
  personalEmail: z.string().optional().nullable(),
  photos: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BookAuthorUncheckedCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.BookAuthorUncheckedCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorUncheckedCreateWithoutClientInput>;
export const BookAuthorUncheckedCreateWithoutClientInputObjectZodSchema = makeSchema();
