import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesSelectObjectSchema as tblCustTypesSelectObjectSchema } from './tblCustTypesSelect.schema';
import { tblCustTypesIncludeObjectSchema as tblCustTypesIncludeObjectSchema } from './tblCustTypesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblCustTypesSelectObjectSchema).optional(),
  include: z.lazy(() => tblCustTypesIncludeObjectSchema).optional()
}).strict();
export const tblCustTypesArgsObjectSchema = makeSchema();
export const tblCustTypesArgsObjectZodSchema = makeSchema();
