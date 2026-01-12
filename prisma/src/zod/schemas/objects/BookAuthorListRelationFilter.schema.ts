import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BookAuthorWhereInputObjectSchema as BookAuthorWhereInputObjectSchema } from './BookAuthorWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BookAuthorWhereInputObjectSchema).optional(),
  some: z.lazy(() => BookAuthorWhereInputObjectSchema).optional(),
  none: z.lazy(() => BookAuthorWhereInputObjectSchema).optional()
}).strict();
export const BookAuthorListRelationFilterObjectSchema: z.ZodType<Prisma.BookAuthorListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorListRelationFilter>;
export const BookAuthorListRelationFilterObjectZodSchema = makeSchema();
