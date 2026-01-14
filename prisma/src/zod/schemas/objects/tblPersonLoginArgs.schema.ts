import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPersonLoginSelectObjectSchema as tblPersonLoginSelectObjectSchema } from './tblPersonLoginSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblPersonLoginSelectObjectSchema).optional()
}).strict();
export const tblPersonLoginArgsObjectSchema = makeSchema();
export const tblPersonLoginArgsObjectZodSchema = makeSchema();
