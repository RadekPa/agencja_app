import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblMailingListsInputObjectSchema as tblCustomersCreateWithoutTblMailingListsInputObjectSchema } from './tblCustomersCreateWithoutTblMailingListsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblMailingListsInput.schema';
import { tblCustomersCreateOrConnectWithoutTblMailingListsInputObjectSchema as tblCustomersCreateOrConnectWithoutTblMailingListsInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblMailingListsInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblMailingListsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblMailingListsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblMailingListsInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblMailingListsInput>;
export const tblCustomersCreateNestedOneWithoutTblMailingListsInputObjectZodSchema = makeSchema();
