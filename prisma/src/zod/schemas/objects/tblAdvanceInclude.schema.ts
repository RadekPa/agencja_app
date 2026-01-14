import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsArgsObjectSchema as tblAgreementsArgsObjectSchema } from './tblAgreementsArgs.schema'

const makeSchema = () => z.object({
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsArgsObjectSchema)]).optional()
}).strict();
export const tblAdvanceIncludeObjectSchema: z.ZodType<Prisma.tblAdvanceInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceInclude>;
export const tblAdvanceIncludeObjectZodSchema = makeSchema();
