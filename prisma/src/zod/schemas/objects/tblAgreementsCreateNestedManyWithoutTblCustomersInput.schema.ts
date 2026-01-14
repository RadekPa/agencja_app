import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblCustomersInputObjectSchema as tblAgreementsCreateWithoutTblCustomersInputObjectSchema } from './tblAgreementsCreateWithoutTblCustomersInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblCustomersInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblCustomersInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblCustomersInput.schema';
import { tblAgreementsCreateManyTblCustomersInputEnvelopeObjectSchema as tblAgreementsCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblAgreementsCreateManyTblCustomersInputEnvelope.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgreementsCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgreementsCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgreementsCreateNestedManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateNestedManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateNestedManyWithoutTblCustomersInput>;
export const tblAgreementsCreateNestedManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
