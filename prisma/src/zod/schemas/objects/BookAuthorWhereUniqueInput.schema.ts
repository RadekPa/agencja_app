import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const BookAuthorWhereUniqueInputObjectSchema: z.ZodType<Prisma.BookAuthorWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorWhereUniqueInput>;
export const BookAuthorWhereUniqueInputObjectZodSchema = makeSchema();
