import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BookAuthorSelectObjectSchema as BookAuthorSelectObjectSchema } from './BookAuthorSelect.schema';
import { BookAuthorIncludeObjectSchema as BookAuthorIncludeObjectSchema } from './BookAuthorInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BookAuthorSelectObjectSchema).optional(),
  include: z.lazy(() => BookAuthorIncludeObjectSchema).optional()
}).strict();
export const BookAuthorArgsObjectSchema = makeSchema();
export const BookAuthorArgsObjectZodSchema = makeSchema();
