import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeCreateWithoutTblAgrRightsInput.schema';
import { dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRoyTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictRoyTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictRoyTypeCreateManyTblAgrRightsInputEnvelopeObjectSchema as dictRoyTypeCreateManyTblAgrRightsInputEnvelopeObjectSchema } from './dictRoyTypeCreateManyTblAgrRightsInputEnvelope.schema';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './dictRoyTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema).array(), z.lazy(() => dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => dictRoyTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => dictRoyTypeCreateManyTblAgrRightsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema), z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInput>;
export const dictRoyTypeUncheckedCreateNestedManyWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
