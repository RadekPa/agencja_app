import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblFraVAT_NewSelectObjectSchema as tblFraVAT_NewSelectObjectSchema } from './tblFraVAT_NewSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblFraVAT_NewSelectObjectSchema).optional()
}).strict();
export const tblFraVAT_NewArgsObjectSchema = makeSchema();
export const tblFraVAT_NewArgsObjectZodSchema = makeSchema();
