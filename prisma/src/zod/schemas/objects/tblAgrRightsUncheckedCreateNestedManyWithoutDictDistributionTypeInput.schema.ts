import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInput.schema';
import { tblAgrRightsCreateManyDictDistributionTypeInputEnvelopeObjectSchema as tblAgrRightsCreateManyDictDistributionTypeInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyDictDistributionTypeInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutDictDistributionTypeInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictDistributionTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictDistributionTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyDictDistributionTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsUncheckedCreateNestedManyWithoutDictDistributionTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUncheckedCreateNestedManyWithoutDictDistributionTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUncheckedCreateNestedManyWithoutDictDistributionTypeInput>;
export const tblAgrRightsUncheckedCreateNestedManyWithoutDictDistributionTypeInputObjectZodSchema = makeSchema();
