import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsUncheckedCreateNestedManyWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUncheckedCreateNestedManyWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateNestedManyWithoutDictRoyPriceTypeInput.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: z.number().int(),
  RoyPriceTypeDesc: z.string().max(50),
  RoyPriceTypePL: z.string().max(50).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedCreateNestedManyWithoutDictRoyPriceTypeInputObjectSchema).optional()
}).strict();
export const dictRoyPriceTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUncheckedCreateInput>;
export const dictRoyPriceTypeUncheckedCreateInputObjectZodSchema = makeSchema();
