import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrID: z.number().int().optional().nullable(),
  RightID: z.number().int().optional().nullable(),
  RoyPriceTypeID: z.number().int().optional().nullable(),
  RoyAccountIntervalID: z.number().int().optional().nullable(),
  DistID: z.number().int().optional().nullable()
}).strict();
export const tblAgrRightsCreateManyDictPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateManyDictPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateManyDictPriceTypeInput>;
export const tblAgrRightsCreateManyDictPriceTypeInputObjectZodSchema = makeSchema();
