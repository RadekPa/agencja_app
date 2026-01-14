import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsArgsObjectSchema as tblAgreementsArgsObjectSchema } from './tblAgreementsArgs.schema'

const makeSchema = () => z.object({
  AdvID: z.boolean().optional(),
  Inst: z.boolean().optional(),
  AgrID: z.boolean().optional(),
  AdvTermId: z.boolean().optional(),
  AdvTypeId: z.boolean().optional(),
  Amount: z.boolean().optional(),
  AdvTermDate: z.boolean().optional(),
  RoyID: z.boolean().optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsArgsObjectSchema)]).optional()
}).strict();
export const tblAdvanceSelectObjectSchema: z.ZodType<Prisma.tblAdvanceSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceSelect>;
export const tblAdvanceSelectObjectZodSchema = makeSchema();
