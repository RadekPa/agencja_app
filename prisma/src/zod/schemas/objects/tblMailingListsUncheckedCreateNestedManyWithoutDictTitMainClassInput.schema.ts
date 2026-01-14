import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema as tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsCreateWithoutDictTitMainClassInput.schema';
import { tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema as tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutDictTitMainClassInput.schema';
import { tblMailingListsCreateOrConnectWithoutDictTitMainClassInputObjectSchema as tblMailingListsCreateOrConnectWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsCreateOrConnectWithoutDictTitMainClassInput.schema';
import { tblMailingListsCreateManyDictTitMainClassInputEnvelopeObjectSchema as tblMailingListsCreateManyDictTitMainClassInputEnvelopeObjectSchema } from './tblMailingListsCreateManyDictTitMainClassInputEnvelope.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema).array(), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblMailingListsCreateOrConnectWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsCreateOrConnectWithoutDictTitMainClassInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblMailingListsCreateManyDictTitMainClassInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema), z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInput>;
export const tblMailingListsUncheckedCreateNestedManyWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
