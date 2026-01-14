import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TblPlacesCountOutputTypeSelectObjectSchema as TblPlacesCountOutputTypeSelectObjectSchema } from './TblPlacesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TblPlacesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TblPlacesCountOutputTypeArgsObjectSchema = makeSchema();
export const TblPlacesCountOutputTypeArgsObjectZodSchema = makeSchema();
