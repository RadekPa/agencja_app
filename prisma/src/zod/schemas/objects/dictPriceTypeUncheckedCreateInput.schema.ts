import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsUncheckedCreateNestedManyWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUncheckedCreateNestedManyWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateNestedManyWithoutDictPriceTypeInput.schema'

const makeSchema = () => z.object({
  PriceTypeID: z.number().int(),
  PriceTypeDesc: z.string().max(50).optional().nullable(),
  PriceTypePL: z.string().max(50).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedCreateNestedManyWithoutDictPriceTypeInputObjectSchema).optional()
}).strict();
export const dictPriceTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictPriceTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeUncheckedCreateInput>;
export const dictPriceTypeUncheckedCreateInputObjectZodSchema = makeSchema();
