import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictPriceTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictPriceTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsCreateOrConnectWithoutDictPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutDictPriceTypeInput>;
export const tblAgrRightsCreateOrConnectWithoutDictPriceTypeInputObjectZodSchema = makeSchema();
