import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema as dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassCreateWithoutTblMailingListsInput.schema';
import { dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema as dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutTblMailingListsInput.schema';
import { dictTitSubClassCreateOrConnectWithoutTblMailingListsInputObjectSchema as dictTitSubClassCreateOrConnectWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassCreateOrConnectWithoutTblMailingListsInput.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictTitSubClassCreateOrConnectWithoutTblMailingListsInputObjectSchema).optional(),
  connect: z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateNestedOneWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateNestedOneWithoutTblMailingListsInput>;
export const dictTitSubClassCreateNestedOneWithoutTblMailingListsInputObjectZodSchema = makeSchema();
