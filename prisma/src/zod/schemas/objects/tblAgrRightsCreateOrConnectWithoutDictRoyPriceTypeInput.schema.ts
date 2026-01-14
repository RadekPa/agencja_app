import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInput>;
export const tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInputObjectZodSchema = makeSchema();
