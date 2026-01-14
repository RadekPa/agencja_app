import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsSelectObjectSchema as tblAgrRightsSelectObjectSchema } from './tblAgrRightsSelect.schema';
import { tblAgrRightsIncludeObjectSchema as tblAgrRightsIncludeObjectSchema } from './tblAgrRightsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblAgrRightsSelectObjectSchema).optional(),
  include: z.lazy(() => tblAgrRightsIncludeObjectSchema).optional()
}).strict();
export const tblAgrRightsArgsObjectSchema = makeSchema();
export const tblAgrRightsArgsObjectZodSchema = makeSchema();
