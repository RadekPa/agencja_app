import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblMailingListsInputObjectSchema as tblCustomersCreateWithoutTblMailingListsInputObjectSchema } from './tblCustomersCreateWithoutTblMailingListsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblMailingListsInput.schema';
import { tblCustomersCreateOrConnectWithoutTblMailingListsInputObjectSchema as tblCustomersCreateOrConnectWithoutTblMailingListsInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblMailingListsInput.schema';
import { tblCustomersUpsertWithoutTblMailingListsInputObjectSchema as tblCustomersUpsertWithoutTblMailingListsInputObjectSchema } from './tblCustomersUpsertWithoutTblMailingListsInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema as tblCustomersUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema } from './tblCustomersUpdateToOneWithWhereWithoutTblMailingListsInput.schema';
import { tblCustomersUpdateWithoutTblMailingListsInputObjectSchema as tblCustomersUpdateWithoutTblMailingListsInputObjectSchema } from './tblCustomersUpdateWithoutTblMailingListsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblMailingListsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblMailingListsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblMailingListsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustomersUpsertWithoutTblMailingListsInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema), z.lazy(() => tblCustomersUpdateWithoutTblMailingListsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblMailingListsInputObjectSchema)]).optional()
}).strict();
export const tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInput>;
export const tblCustomersUpdateOneRequiredWithoutTblMailingListsNestedInputObjectZodSchema = makeSchema();
