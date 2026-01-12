import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
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
export const BookAuthorCreateManyClientInputObjectSchema: z.ZodType<Prisma.BookAuthorCreateManyClientInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorCreateManyClientInput>;
export const BookAuthorCreateManyClientInputObjectZodSchema = makeSchema();
