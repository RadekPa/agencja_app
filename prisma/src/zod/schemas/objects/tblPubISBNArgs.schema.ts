import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNSelectObjectSchema as tblPubISBNSelectObjectSchema } from './tblPubISBNSelect.schema';
import { tblPubISBNIncludeObjectSchema as tblPubISBNIncludeObjectSchema } from './tblPubISBNInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblPubISBNSelectObjectSchema).optional(),
  include: z.lazy(() => tblPubISBNIncludeObjectSchema).optional()
}).strict();
export const tblPubISBNArgsObjectSchema = makeSchema();
export const tblPubISBNArgsObjectZodSchema = makeSchema();
