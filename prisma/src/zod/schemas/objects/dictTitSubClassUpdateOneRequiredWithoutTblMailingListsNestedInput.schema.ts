import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema as dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassCreateWithoutTblMailingListsInput.schema';
import { dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema as dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutTblMailingListsInput.schema';
import { dictTitSubClassCreateOrConnectWithoutTblMailingListsInputObjectSchema as dictTitSubClassCreateOrConnectWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassCreateOrConnectWithoutTblMailingListsInput.schema';
import { dictTitSubClassUpsertWithoutTblMailingListsInputObjectSchema as dictTitSubClassUpsertWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUpsertWithoutTblMailingListsInput.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './dictTitSubClassWhereUniqueInput.schema';
import { dictTitSubClassUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema as dictTitSubClassUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUpdateToOneWithWhereWithoutTblMailingListsInput.schema';
import { dictTitSubClassUpdateWithoutTblMailingListsInputObjectSchema as dictTitSubClassUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUpdateWithoutTblMailingListsInput.schema';
import { dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema as dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitSubClassUncheckedUpdateWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutTblMailingListsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictTitSubClassCreateOrConnectWithoutTblMailingListsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictTitSubClassUpsertWithoutTblMailingListsInputObjectSchema).optional(),
  connect: z.lazy(() => dictTitSubClassWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictTitSubClassUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitSubClassUpdateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema)]).optional()
}).strict();
export const dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInput>;
export const dictTitSubClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectZodSchema = makeSchema();
