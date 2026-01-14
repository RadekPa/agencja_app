import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsSelectObjectSchema as tblTitAuthorsSelectObjectSchema } from './tblTitAuthorsSelect.schema';
import { tblTitAuthorsIncludeObjectSchema as tblTitAuthorsIncludeObjectSchema } from './tblTitAuthorsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblTitAuthorsSelectObjectSchema).optional(),
  include: z.lazy(() => tblTitAuthorsIncludeObjectSchema).optional()
}).strict();
export const tblTitAuthorsArgsObjectSchema = makeSchema();
export const tblTitAuthorsArgsObjectZodSchema = makeSchema();
