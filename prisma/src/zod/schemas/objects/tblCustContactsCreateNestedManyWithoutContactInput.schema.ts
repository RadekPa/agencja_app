import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsCreateWithoutContactInputObjectSchema as tblCustContactsCreateWithoutContactInputObjectSchema } from './tblCustContactsCreateWithoutContactInput.schema';
import { tblCustContactsUncheckedCreateWithoutContactInputObjectSchema as tblCustContactsUncheckedCreateWithoutContactInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutContactInput.schema';
import { tblCustContactsCreateOrConnectWithoutContactInputObjectSchema as tblCustContactsCreateOrConnectWithoutContactInputObjectSchema } from './tblCustContactsCreateOrConnectWithoutContactInput.schema';
import { tblCustContactsCreateManyContactInputEnvelopeObjectSchema as tblCustContactsCreateManyContactInputEnvelopeObjectSchema } from './tblCustContactsCreateManyContactInputEnvelope.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsCreateWithoutContactInputObjectSchema).array(), z.lazy(() => tblCustContactsUncheckedCreateWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutContactInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustContactsCreateOrConnectWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsCreateOrConnectWithoutContactInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustContactsCreateManyContactInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblCustContactsCreateNestedManyWithoutContactInputObjectSchema: z.ZodType<Prisma.tblCustContactsCreateNestedManyWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateNestedManyWithoutContactInput>;
export const tblCustContactsCreateNestedManyWithoutContactInputObjectZodSchema = makeSchema();
