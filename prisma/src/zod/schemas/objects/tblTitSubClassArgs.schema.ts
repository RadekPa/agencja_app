import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassSelectObjectSchema as tblTitSubClassSelectObjectSchema } from './tblTitSubClassSelect.schema';
import { tblTitSubClassIncludeObjectSchema as tblTitSubClassIncludeObjectSchema } from './tblTitSubClassInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblTitSubClassSelectObjectSchema).optional(),
  include: z.lazy(() => tblTitSubClassIncludeObjectSchema).optional()
}).strict();
export const tblTitSubClassArgsObjectSchema = makeSchema();
export const tblTitSubClassArgsObjectZodSchema = makeSchema();
