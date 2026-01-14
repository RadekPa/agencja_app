import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateNestedOneWithoutTblAdvanceInputObjectSchema as tblAgreementsCreateNestedOneWithoutTblAdvanceInputObjectSchema } from './tblAgreementsCreateNestedOneWithoutTblAdvanceInput.schema'

const makeSchema = () => z.object({
  Inst: z.number().int(),
  AdvTermId: z.number().int().optional().nullable(),
  AdvTypeId: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable(),
  AdvTermDate: z.coerce.date().optional().nullable(),
  RoyID: z.number().int().optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedOneWithoutTblAdvanceInputObjectSchema)
}).strict();
export const tblAdvanceCreateInputObjectSchema: z.ZodType<Prisma.tblAdvanceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceCreateInput>;
export const tblAdvanceCreateInputObjectZodSchema = makeSchema();
