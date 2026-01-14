import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema as dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassCreateWithoutTblMailingListsInput.schema';
import { dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema as dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutTblMailingListsInput.schema';
import { dictTitMainClassCreateOrConnectWithoutTblMailingListsInputObjectSchema as dictTitMainClassCreateOrConnectWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassCreateOrConnectWithoutTblMailingListsInput.schema';
import { dictTitMainClassUpsertWithoutTblMailingListsInputObjectSchema as dictTitMainClassUpsertWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUpsertWithoutTblMailingListsInput.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './dictTitMainClassWhereUniqueInput.schema';
import { dictTitMainClassUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema as dictTitMainClassUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUpdateToOneWithWhereWithoutTblMailingListsInput.schema';
import { dictTitMainClassUpdateWithoutTblMailingListsInputObjectSchema as dictTitMainClassUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUpdateWithoutTblMailingListsInput.schema';
import { dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema as dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema } from './dictTitMainClassUncheckedUpdateWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutTblMailingListsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictTitMainClassCreateOrConnectWithoutTblMailingListsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictTitMainClassUpsertWithoutTblMailingListsInputObjectSchema).optional(),
  connect: z.lazy(() => dictTitMainClassWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictTitMainClassUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitMainClassUpdateWithoutTblMailingListsInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema)]).optional()
}).strict();
export const dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInput>;
export const dictTitMainClassUpdateOneRequiredWithoutTblMailingListsNestedInputObjectZodSchema = makeSchema();
