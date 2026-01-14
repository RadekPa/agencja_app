import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema as tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsCreateWithoutDictRightsFormInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRightsFormInput.schema';
import { tblAgrRightsCreateOrConnectWithoutDictRightsFormInputObjectSchema as tblAgrRightsCreateOrConnectWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutDictRightsFormInput.schema';
import { tblAgrRightsCreateManyDictRightsFormInputEnvelopeObjectSchema as tblAgrRightsCreateManyDictRightsFormInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyDictRightsFormInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutDictRightsFormInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRightsFormInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutDictRightsFormInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyDictRightsFormInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsCreateNestedManyWithoutDictRightsFormInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateNestedManyWithoutDictRightsFormInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateNestedManyWithoutDictRightsFormInput>;
export const tblAgrRightsCreateNestedManyWithoutDictRightsFormInputObjectZodSchema = makeSchema();
