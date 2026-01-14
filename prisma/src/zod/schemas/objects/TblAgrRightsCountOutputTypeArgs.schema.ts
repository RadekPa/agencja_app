import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TblAgrRightsCountOutputTypeSelectObjectSchema as TblAgrRightsCountOutputTypeSelectObjectSchema } from './TblAgrRightsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TblAgrRightsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TblAgrRightsCountOutputTypeArgsObjectSchema = makeSchema();
export const TblAgrRightsCountOutputTypeArgsObjectZodSchema = makeSchema();
