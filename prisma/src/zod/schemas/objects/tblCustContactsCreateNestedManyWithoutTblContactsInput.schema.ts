import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsCreateWithoutTblContactsInputObjectSchema as tblCustContactsCreateWithoutTblContactsInputObjectSchema } from './tblCustContactsCreateWithoutTblContactsInput.schema';
import { tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema as tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutTblContactsInput.schema';
import { tblCustContactsCreateOrConnectWithoutTblContactsInputObjectSchema as tblCustContactsCreateOrConnectWithoutTblContactsInputObjectSchema } from './tblCustContactsCreateOrConnectWithoutTblContactsInput.schema';
import { tblCustContactsCreateManyTblContactsInputEnvelopeObjectSchema as tblCustContactsCreateManyTblContactsInputEnvelopeObjectSchema } from './tblCustContactsCreateManyTblContactsInputEnvelope.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsCreateWithoutTblContactsInputObjectSchema).array(), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustContactsCreateOrConnectWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsCreateOrConnectWithoutTblContactsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustContactsCreateManyTblContactsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblCustContactsCreateNestedManyWithoutTblContactsInputObjectSchema: z.ZodType<Prisma.tblCustContactsCreateNestedManyWithoutTblContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateNestedManyWithoutTblContactsInput>;
export const tblCustContactsCreateNestedManyWithoutTblContactsInputObjectZodSchema = makeSchema();
