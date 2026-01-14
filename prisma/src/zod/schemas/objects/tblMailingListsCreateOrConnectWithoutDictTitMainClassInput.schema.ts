import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema as tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsCreateWithoutDictTitMainClassInput.schema';
import { tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema as tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const tblMailingListsCreateOrConnectWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateOrConnectWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateOrConnectWithoutDictTitMainClassInput>;
export const tblMailingListsCreateOrConnectWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
