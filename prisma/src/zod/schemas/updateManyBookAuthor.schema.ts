import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BookAuthorUpdateManyMutationInputObjectSchema as BookAuthorUpdateManyMutationInputObjectSchema } from './objects/BookAuthorUpdateManyMutationInput.schema';
import { BookAuthorWhereInputObjectSchema as BookAuthorWhereInputObjectSchema } from './objects/BookAuthorWhereInput.schema';

export const BookAuthorUpdateManySchema: z.ZodType<Prisma.BookAuthorUpdateManyArgs> = z.object({ data: BookAuthorUpdateManyMutationInputObjectSchema, where: BookAuthorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BookAuthorUpdateManyArgs>;

export const BookAuthorUpdateManyZodSchema = z.object({ data: BookAuthorUpdateManyMutationInputObjectSchema, where: BookAuthorWhereInputObjectSchema.optional() }).strict();