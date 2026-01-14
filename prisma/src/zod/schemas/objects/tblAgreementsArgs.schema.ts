import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsSelectObjectSchema as tblAgreementsSelectObjectSchema } from './tblAgreementsSelect.schema';
import { tblAgreementsIncludeObjectSchema as tblAgreementsIncludeObjectSchema } from './tblAgreementsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblAgreementsSelectObjectSchema).optional(),
  include: z.lazy(() => tblAgreementsIncludeObjectSchema).optional()
}).strict();
export const tblAgreementsArgsObjectSchema = makeSchema();
export const tblAgreementsArgsObjectZodSchema = makeSchema();
