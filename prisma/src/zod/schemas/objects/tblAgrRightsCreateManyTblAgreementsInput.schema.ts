import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RightID: z.number().int().optional().nullable(),
  PriceTypeID: z.number().int().optional().nullable(),
  RoyPriceTypeID: z.number().int().optional().nullable(),
  RoyAccountIntervalID: z.number().int().optional().nullable(),
  DistID: z.number().int().optional().nullable()
}).strict();
export const tblAgrRightsCreateManyTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateManyTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateManyTblAgreementsInput>;
export const tblAgrRightsCreateManyTblAgreementsInputObjectZodSchema = makeSchema();
