import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictPriceTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictPriceTypeInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictPriceTypeInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictPriceTypeInput.schema';
import { tblAgrRightsCreateManyDictPriceTypeInputEnvelopeObjectSchema as tblAgrRightsCreateManyDictPriceTypeInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyDictPriceTypeInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictPriceTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyDictPriceTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsCreateNestedManyWithoutDictPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateNestedManyWithoutDictPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateNestedManyWithoutDictPriceTypeInput>;
export const tblAgrRightsCreateNestedManyWithoutDictPriceTypeInputObjectZodSchema = makeSchema();
