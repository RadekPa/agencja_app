import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema as tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsCreateWithoutDictTitSubClassInput.schema';
import { tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema as tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutDictTitSubClassInput.schema';
import { tblMailingListsCreateOrConnectWithoutDictTitSubClassInputObjectSchema as tblMailingListsCreateOrConnectWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsCreateOrConnectWithoutDictTitSubClassInput.schema';
import { tblMailingListsCreateManyDictTitSubClassInputEnvelopeObjectSchema as tblMailingListsCreateManyDictTitSubClassInputEnvelopeObjectSchema } from './tblMailingListsCreateManyDictTitSubClassInputEnvelope.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema).array(), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblMailingListsCreateOrConnectWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsCreateOrConnectWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblMailingListsCreateManyDictTitSubClassInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateNestedManyWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateNestedManyWithoutDictTitSubClassInput>;
export const tblMailingListsCreateNestedManyWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
