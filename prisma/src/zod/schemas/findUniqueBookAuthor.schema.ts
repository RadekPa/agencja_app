import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BookAuthorSelectObjectSchema as BookAuthorSelectObjectSchema } from './objects/BookAuthorSelect.schema';
import { BookAuthorIncludeObjectSchema as BookAuthorIncludeObjectSchema } from './objects/BookAuthorInclude.schema';
import { BookAuthorWhereUniqueInputObjectSchema as BookAuthorWhereUniqueInputObjectSchema } from './objects/BookAuthorWhereUniqueInput.schema';

export const BookAuthorFindUniqueSchema: z.ZodType<Prisma.BookAuthorFindUniqueArgs> = z.object({ select: BookAuthorSelectObjectSchema.optional(), include: BookAuthorIncludeObjectSchema.optional(), where: BookAuthorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BookAuthorFindUniqueArgs>;

export const BookAuthorFindUniqueZodSchema = z.object({ select: BookAuthorSelectObjectSchema.optional(), include: BookAuthorIncludeObjectSchema.optional(), where: BookAuthorWhereUniqueInputObjectSchema }).strict();