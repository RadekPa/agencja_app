import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblCustBankInputObjectSchema as tblCustomersCreateWithoutTblCustBankInputObjectSchema } from './tblCustomersCreateWithoutTblCustBankInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustBankInput.schema';
import { tblCustomersCreateOrConnectWithoutTblCustBankInputObjectSchema as tblCustomersCreateOrConnectWithoutTblCustBankInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblCustBankInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustBankInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblCustBankInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateNestedOneWithoutTblCustBankInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblCustBankInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblCustBankInput>;
export const tblCustomersCreateNestedOneWithoutTblCustBankInputObjectZodSchema = makeSchema();
