import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutDictLanguagesInputObjectSchema as tblAgreementsCreateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsCreateWithoutDictLanguagesInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictLanguagesInput.schema';
import { tblAgreementsCreateOrConnectWithoutDictLanguagesInputObjectSchema as tblAgreementsCreateOrConnectWithoutDictLanguagesInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutDictLanguagesInput.schema';
import { tblAgreementsCreateManyDictLanguagesInputEnvelopeObjectSchema as tblAgreementsCreateManyDictLanguagesInputEnvelopeObjectSchema } from './tblAgreementsCreateManyDictLanguagesInputEnvelope.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsCreateWithoutDictLanguagesInputObjectSchema).array(), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgreementsCreateOrConnectWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsCreateOrConnectWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgreementsCreateManyDictLanguagesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInput>;
export const tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectZodSchema = makeSchema();
