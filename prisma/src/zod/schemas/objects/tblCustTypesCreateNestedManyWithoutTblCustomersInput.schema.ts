import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesCreateWithoutTblCustomersInputObjectSchema as tblCustTypesCreateWithoutTblCustomersInputObjectSchema } from './tblCustTypesCreateWithoutTblCustomersInput.schema';
import { tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustTypesUncheckedCreateWithoutTblCustomersInput.schema';
import { tblCustTypesCreateOrConnectWithoutTblCustomersInputObjectSchema as tblCustTypesCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblCustTypesCreateOrConnectWithoutTblCustomersInput.schema';
import { tblCustTypesCreateManyTblCustomersInputEnvelopeObjectSchema as tblCustTypesCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblCustTypesCreateManyTblCustomersInputEnvelope.schema';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './tblCustTypesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustTypesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustTypesCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustTypesCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema), z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblCustTypesCreateNestedManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesCreateNestedManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateNestedManyWithoutTblCustomersInput>;
export const tblCustTypesCreateNestedManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
