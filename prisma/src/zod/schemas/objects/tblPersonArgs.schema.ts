import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPersonSelectObjectSchema as tblPersonSelectObjectSchema } from './tblPersonSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblPersonSelectObjectSchema).optional()
}).strict();
export const tblPersonArgsObjectSchema = makeSchema();
export const tblPersonArgsObjectZodSchema = makeSchema();
