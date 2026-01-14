import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersUpdateWithoutTblMailingListsInputObjectSchema as tblCustomersUpdateWithoutTblMailingListsInputObjectSchema } from './tblCustomersUpdateWithoutTblMailingListsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblMailingListsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblMailingListsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblMailingListsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutTblMailingListsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblMailingListsInputObjectSchema)])
}).strict();
export const tblCustomersUpdateToOneWithWhereWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblMailingListsInput>;
export const tblCustomersUpdateToOneWithWhereWithoutTblMailingListsInputObjectZodSchema = makeSchema();
