import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPdoxInvMatSelectObjectSchema as tblPdoxInvMatSelectObjectSchema } from './tblPdoxInvMatSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblPdoxInvMatSelectObjectSchema).optional()
}).strict();
export const tblPdoxInvMatArgsObjectSchema = makeSchema();
export const tblPdoxInvMatArgsObjectZodSchema = makeSchema();
