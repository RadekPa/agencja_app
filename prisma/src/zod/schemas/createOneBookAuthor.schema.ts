import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BookAuthorSelectObjectSchema as BookAuthorSelectObjectSchema } from './objects/BookAuthorSelect.schema';
import { BookAuthorIncludeObjectSchema as BookAuthorIncludeObjectSchema } from './objects/BookAuthorInclude.schema';
import { BookAuthorCreateInputObjectSchema as BookAuthorCreateInputObjectSchema } from './objects/BookAuthorCreateInput.schema';
import { BookAuthorUncheckedCreateInputObjectSchema as BookAuthorUncheckedCreateInputObjectSchema } from './objects/BookAuthorUncheckedCreateInput.schema';

export const BookAuthorCreateOneSchema: z.ZodType<Prisma.BookAuthorCreateArgs> = z.object({ select: BookAuthorSelectObjectSchema.optional(), include: BookAuthorIncludeObjectSchema.optional(), data: z.union([BookAuthorCreateInputObjectSchema, BookAuthorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.BookAuthorCreateArgs>;

export const BookAuthorCreateOneZodSchema = z.object({ select: BookAuthorSelectObjectSchema.optional(), include: BookAuthorIncludeObjectSchema.optional(), data: z.union([BookAuthorCreateInputObjectSchema, BookAuthorUncheckedCreateInputObjectSchema]) }).strict();