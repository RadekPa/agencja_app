import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInput.schema';
import { tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelopeObjectSchema as tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutDictRoyAccountIntervalInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyAccountIntervalInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRoyAccountIntervalInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsCreateNestedManyWithoutDictRoyAccountIntervalInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateNestedManyWithoutDictRoyAccountIntervalInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateNestedManyWithoutDictRoyAccountIntervalInput>;
export const tblAgrRightsCreateNestedManyWithoutDictRoyAccountIntervalInputObjectZodSchema = makeSchema();
