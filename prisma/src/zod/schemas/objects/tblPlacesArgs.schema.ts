import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesSelectObjectSchema as tblPlacesSelectObjectSchema } from './tblPlacesSelect.schema';
import { tblPlacesIncludeObjectSchema as tblPlacesIncludeObjectSchema } from './tblPlacesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblPlacesSelectObjectSchema).optional(),
  include: z.lazy(() => tblPlacesIncludeObjectSchema).optional()
}).strict();
export const tblPlacesArgsObjectSchema = makeSchema();
export const tblPlacesArgsObjectZodSchema = makeSchema();
