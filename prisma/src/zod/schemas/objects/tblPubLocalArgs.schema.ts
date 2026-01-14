import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubLocalSelectObjectSchema as tblPubLocalSelectObjectSchema } from './tblPubLocalSelect.schema';
import { tblPubLocalIncludeObjectSchema as tblPubLocalIncludeObjectSchema } from './tblPubLocalInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblPubLocalSelectObjectSchema).optional(),
  include: z.lazy(() => tblPubLocalIncludeObjectSchema).optional()
}).strict();
export const tblPubLocalArgsObjectSchema = makeSchema();
export const tblPubLocalArgsObjectZodSchema = makeSchema();
