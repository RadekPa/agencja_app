import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TblAgreementsCountOutputTypeSelectObjectSchema as TblAgreementsCountOutputTypeSelectObjectSchema } from './TblAgreementsCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TblAgreementsCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TblAgreementsCountOutputTypeArgsObjectSchema = makeSchema();
export const TblAgreementsCountOutputTypeArgsObjectZodSchema = makeSchema();
