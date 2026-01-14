import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateWithoutTblMailingListsInputObjectSchema as tblCustomersUpdateWithoutTblMailingListsInputObjectSchema } from './tblCustomersUpdateWithoutTblMailingListsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblMailingListsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblMailingListsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblMailingListsInput.schema';
import { tblCustomersCreateWithoutTblMailingListsInputObjectSchema as tblCustomersCreateWithoutTblMailingListsInputObjectSchema } from './tblCustomersCreateWithoutTblMailingListsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblMailingListsInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutTblMailingListsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblMailingListsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema)]),
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const tblCustomersUpsertWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithoutTblMailingListsInput>;
export const tblCustomersUpsertWithoutTblMailingListsInputObjectZodSchema = makeSchema();
