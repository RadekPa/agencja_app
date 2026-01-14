import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Inst: z.number().int(),
  AdvTermId: z.number().int().optional().nullable(),
  AdvTypeId: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable(),
  AdvTermDate: z.coerce.date().optional().nullable(),
  RoyID: z.number().int().optional().nullable()
}).strict();
export const tblAdvanceCreateManyTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAdvanceCreateManyTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceCreateManyTblAgreementsInput>;
export const tblAdvanceCreateManyTblAgreementsInputObjectZodSchema = makeSchema();
