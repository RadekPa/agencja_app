import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrID: z.number().int().optional().nullable(),
  PriceTypeID: z.number().int().optional().nullable(),
  RoyPriceTypeID: z.number().int().optional().nullable(),
  RoyAccountIntervalID: z.number().int().optional().nullable(),
  DistID: z.number().int().optional().nullable()
}).strict();
export const tblAgrRightsCreateManyDictRightsFormInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateManyDictRightsFormInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateManyDictRightsFormInput>;
export const tblAgrRightsCreateManyDictRightsFormInputObjectZodSchema = makeSchema();
