import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Step: z.number().int(),
  AgrRightID: z.number().int(),
  CpsMax: z.number().int().optional().nullable(),
  Rate: z.number().optional().nullable()
}).strict();
export const tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUncheckedCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUncheckedCreateWithoutTblAgreementsInput>;
export const tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
