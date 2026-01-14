import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsCreateWithoutTblCustomersInputObjectSchema as tblCustContactsCreateWithoutTblCustomersInputObjectSchema } from './tblCustContactsCreateWithoutTblCustomersInput.schema';
import { tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutTblCustomersInput.schema';
import { tblCustContactsCreateOrConnectWithoutTblCustomersInputObjectSchema as tblCustContactsCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblCustContactsCreateOrConnectWithoutTblCustomersInput.schema';
import { tblCustContactsCreateManyTblCustomersInputEnvelopeObjectSchema as tblCustContactsCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblCustContactsCreateManyTblCustomersInputEnvelope.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustContactsCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustContactsCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblCustContactsUncheckedCreateNestedManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustContactsUncheckedCreateNestedManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUncheckedCreateNestedManyWithoutTblCustomersInput>;
export const tblCustContactsUncheckedCreateNestedManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
