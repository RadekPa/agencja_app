import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelopeObjectSchema as tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRoyPriceTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsCreateNestedManyWithoutDictRoyPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateNestedManyWithoutDictRoyPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateNestedManyWithoutDictRoyPriceTypeInput>;
export const tblAgrRightsCreateNestedManyWithoutDictRoyPriceTypeInputObjectZodSchema = makeSchema();
