import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateNestedManyWithoutDictPriceTypeInputObjectSchema as tblAgrRightsCreateNestedManyWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsCreateNestedManyWithoutDictPriceTypeInput.schema'

const makeSchema = () => z.object({
  PriceTypeID: z.number().int(),
  PriceTypeDesc: z.string().max(50).optional().nullable(),
  PriceTypePL: z.string().max(50).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsCreateNestedManyWithoutDictPriceTypeInputObjectSchema).optional()
}).strict();
export const dictPriceTypeCreateInputObjectSchema: z.ZodType<Prisma.dictPriceTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeCreateInput>;
export const dictPriceTypeCreateInputObjectZodSchema = makeSchema();
