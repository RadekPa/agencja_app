import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BookAuthorSelectObjectSchema as BookAuthorSelectObjectSchema } from './objects/BookAuthorSelect.schema';
import { BookAuthorIncludeObjectSchema as BookAuthorIncludeObjectSchema } from './objects/BookAuthorInclude.schema';
import { BookAuthorWhereUniqueInputObjectSchema as BookAuthorWhereUniqueInputObjectSchema } from './objects/BookAuthorWhereUniqueInput.schema';
import { BookAuthorCreateInputObjectSchema as BookAuthorCreateInputObjectSchema } from './objects/BookAuthorCreateInput.schema';
import { BookAuthorUncheckedCreateInputObjectSchema as BookAuthorUncheckedCreateInputObjectSchema } from './objects/BookAuthorUncheckedCreateInput.schema';
import { BookAuthorUpdateInputObjectSchema as BookAuthorUpdateInputObjectSchema } from './objects/BookAuthorUpdateInput.schema';
import { BookAuthorUncheckedUpdateInputObjectSchema as BookAuthorUncheckedUpdateInputObjectSchema } from './objects/BookAuthorUncheckedUpdateInput.schema';

export const BookAuthorUpsertOneSchema: z.ZodType<Prisma.BookAuthorUpsertArgs> = z.object({ select: BookAuthorSelectObjectSchema.optional(), include: BookAuthorIncludeObjectSchema.optional(), where: BookAuthorWhereUniqueInputObjectSchema, create: z.union([ BookAuthorCreateInputObjectSchema, BookAuthorUncheckedCreateInputObjectSchema ]), update: z.union([ BookAuthorUpdateInputObjectSchema, BookAuthorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.BookAuthorUpsertArgs>;

export const BookAuthorUpsertOneZodSchema = z.object({ select: BookAuthorSelectObjectSchema.optional(), include: BookAuthorIncludeObjectSchema.optional(), where: BookAuthorWhereUniqueInputObjectSchema, create: z.union([ BookAuthorCreateInputObjectSchema, BookAuthorUncheckedCreateInputObjectSchema ]), update: z.union([ BookAuthorUpdateInputObjectSchema, BookAuthorUncheckedUpdateInputObjectSchema ]) }).strict();