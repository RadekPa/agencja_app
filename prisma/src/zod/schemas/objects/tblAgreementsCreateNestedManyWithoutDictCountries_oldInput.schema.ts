import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema as tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsCreateWithoutDictCountries_oldInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictCountries_oldInput.schema';
import { tblAgreementsCreateOrConnectWithoutDictCountries_oldInputObjectSchema as tblAgreementsCreateOrConnectWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutDictCountries_oldInput.schema';
import { tblAgreementsCreateManyDictCountries_oldInputEnvelopeObjectSchema as tblAgreementsCreateManyDictCountries_oldInputEnvelopeObjectSchema } from './tblAgreementsCreateManyDictCountries_oldInputEnvelope.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema).array(), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgreementsCreateOrConnectWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsCreateOrConnectWithoutDictCountries_oldInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgreementsCreateManyDictCountries_oldInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgreementsCreateNestedManyWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateNestedManyWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateNestedManyWithoutDictCountries_oldInput>;
export const tblAgreementsCreateNestedManyWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
