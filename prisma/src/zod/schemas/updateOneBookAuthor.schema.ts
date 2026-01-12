import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BookAuthorSelectObjectSchema as BookAuthorSelectObjectSchema } from './objects/BookAuthorSelect.schema';
import { BookAuthorIncludeObjectSchema as BookAuthorIncludeObjectSchema } from './objects/BookAuthorInclude.schema';
import { BookAuthorUpdateInputObjectSchema as BookAuthorUpdateInputObjectSchema } from './objects/BookAuthorUpdateInput.schema';
import { BookAuthorUncheckedUpdateInputObjectSchema as BookAuthorUncheckedUpdateInputObjectSchema } from './objects/BookAuthorUncheckedUpdateInput.schema';
import { BookAuthorWhereUniqueInputObjectSchema as BookAuthorWhereUniqueInputObjectSchema } from './objects/BookAuthorWhereUniqueInput.schema';

export const BookAuthorUpdateOneSchema: z.ZodType<Prisma.BookAuthorUpdateArgs> = z.object({ select: BookAuthorSelectObjectSchema.optional(), include: BookAuthorIncludeObjectSchema.optional(), data: z.union([BookAuthorUpdateInputObjectSchema, BookAuthorUncheckedUpdateInputObjectSchema]), where: BookAuthorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BookAuthorUpdateArgs>;

export const BookAuthorUpdateOneZodSchema = z.object({ select: BookAuthorSelectObjectSchema.optional(), include: BookAuthorIncludeObjectSchema.optional(), data: z.union([BookAuthorUpdateInputObjectSchema, BookAuthorUncheckedUpdateInputObjectSchema]), where: BookAuthorWhereUniqueInputObjectSchema }).strict();