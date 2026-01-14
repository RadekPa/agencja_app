import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblCustContactsInputObjectSchema as tblCustomersCreateWithoutTblCustContactsInputObjectSchema } from './tblCustomersCreateWithoutTblCustContactsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustContactsInput.schema';
import { tblCustomersCreateOrConnectWithoutTblCustContactsInputObjectSchema as tblCustomersCreateOrConnectWithoutTblCustContactsInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblCustContactsInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblCustContactsInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateNestedOneWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblCustContactsInput>;
export const tblCustomersCreateNestedOneWithoutTblCustContactsInputObjectZodSchema = makeSchema();
