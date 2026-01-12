import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BookAuthorWhereInputObjectSchema as BookAuthorWhereInputObjectSchema } from './BookAuthorWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BookAuthorWhereInputObjectSchema).optional()
}).strict();
export const CustomerCountOutputTypeCountBookAuthorsArgsObjectSchema = makeSchema();
export const CustomerCountOutputTypeCountBookAuthorsArgsObjectZodSchema = makeSchema();
