import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BookAuthorCreateManyInputObjectSchema as BookAuthorCreateManyInputObjectSchema } from './objects/BookAuthorCreateManyInput.schema';

export const BookAuthorCreateManySchema: z.ZodType<Prisma.BookAuthorCreateManyArgs> = z.object({ data: z.union([ BookAuthorCreateManyInputObjectSchema, z.array(BookAuthorCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.BookAuthorCreateManyArgs>;

export const BookAuthorCreateManyZodSchema = z.object({ data: z.union([ BookAuthorCreateManyInputObjectSchema, z.array(BookAuthorCreateManyInputObjectSchema) ]),  }).strict();