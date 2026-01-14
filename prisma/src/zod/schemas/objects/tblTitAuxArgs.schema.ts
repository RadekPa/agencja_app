import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuxSelectObjectSchema as tblTitAuxSelectObjectSchema } from './tblTitAuxSelect.schema';
import { tblTitAuxIncludeObjectSchema as tblTitAuxIncludeObjectSchema } from './tblTitAuxInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblTitAuxSelectObjectSchema).optional(),
  include: z.lazy(() => tblTitAuxIncludeObjectSchema).optional()
}).strict();
export const tblTitAuxArgsObjectSchema = makeSchema();
export const tblTitAuxArgsObjectZodSchema = makeSchema();
