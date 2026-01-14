import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Step: z.number().int(),
  AgrRightID: z.number().int(),
  CpsMax: z.number().int().optional().nullable(),
  Rate: z.number().optional().nullable()
}).strict();
export const tblRoyRatesCreateManyTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesCreateManyTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesCreateManyTblAgreementsInput>;
export const tblRoyRatesCreateManyTblAgreementsInputObjectZodSchema = makeSchema();
