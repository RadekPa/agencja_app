import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './tblMailingListsWhereUniqueInput.schema';
import { tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema as tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsCreateWithoutDictTitSubClassInput.schema';
import { tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema as tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './tblMailingListsUncheckedCreateWithoutDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblMailingListsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblMailingListsCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblMailingListsUncheckedCreateWithoutDictTitSubClassInputObjectSchema)])
}).strict();
export const tblMailingListsCreateOrConnectWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblMailingListsCreateOrConnectWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCreateOrConnectWithoutDictTitSubClassInput>;
export const tblMailingListsCreateOrConnectWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
