import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsSelectObjectSchema as tblAuthorsSelectObjectSchema } from './tblAuthorsSelect.schema';
import { tblAuthorsIncludeObjectSchema as tblAuthorsIncludeObjectSchema } from './tblAuthorsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblAuthorsSelectObjectSchema).optional(),
  include: z.lazy(() => tblAuthorsIncludeObjectSchema).optional()
}).strict();
export const tblAuthorsArgsObjectSchema = makeSchema();
export const tblAuthorsArgsObjectZodSchema = makeSchema();
