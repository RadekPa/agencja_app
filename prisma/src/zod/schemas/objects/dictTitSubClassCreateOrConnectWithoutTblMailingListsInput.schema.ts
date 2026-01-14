import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema';
import { dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema as dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassCreateWithoutTblMailingListsInput.schema';
import { dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema as dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema)])
}).strict();
export const dictTitSubClassCreateOrConnectWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateOrConnectWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateOrConnectWithoutTblMailingListsInput>;
export const dictTitSubClassCreateOrConnectWithoutTblMailingListsInputObjectZodSchema = makeSchema();
