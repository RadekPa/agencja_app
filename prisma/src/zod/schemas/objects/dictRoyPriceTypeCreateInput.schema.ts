import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateNestedManyWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsCreateNestedManyWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsCreateNestedManyWithoutDictRoyPriceTypeInput.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: z.number().int(),
  RoyPriceTypeDesc: z.string().max(50),
  RoyPriceTypePL: z.string().max(50).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsCreateNestedManyWithoutDictRoyPriceTypeInputObjectSchema).optional()
}).strict();
export const dictRoyPriceTypeCreateInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeCreateInput>;
export const dictRoyPriceTypeCreateInputObjectZodSchema = makeSchema();
