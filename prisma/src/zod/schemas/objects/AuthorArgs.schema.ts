import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthorSelectObjectSchema as AuthorSelectObjectSchema } from './AuthorSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AuthorSelectObjectSchema).optional()
}).strict();
export const AuthorArgsObjectSchema = makeSchema();
export const AuthorArgsObjectZodSchema = makeSchema();
