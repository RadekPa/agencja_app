import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BookAuthorWhereInputObjectSchema as BookAuthorWhereInputObjectSchema } from './objects/BookAuthorWhereInput.schema';

export const BookAuthorDeleteManySchema: z.ZodType<Prisma.BookAuthorDeleteManyArgs> = z.object({ where: BookAuthorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BookAuthorDeleteManyArgs>;

export const BookAuthorDeleteManyZodSchema = z.object({ where: BookAuthorWhereInputObjectSchema.optional() }).strict();