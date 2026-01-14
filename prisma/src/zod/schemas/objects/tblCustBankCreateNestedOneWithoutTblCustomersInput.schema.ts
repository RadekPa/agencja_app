import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustBankCreateWithoutTblCustomersInputObjectSchema as tblCustBankCreateWithoutTblCustomersInputObjectSchema } from './tblCustBankCreateWithoutTblCustomersInput.schema';
import { tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustBankUncheckedCreateWithoutTblCustomersInput.schema';
import { tblCustBankCreateOrConnectWithoutTblCustomersInputObjectSchema as tblCustBankCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblCustBankCreateOrConnectWithoutTblCustomersInput.schema';
import { tblCustBankWhereUniqueInputObjectSchema as tblCustBankWhereUniqueInputObjectSchema } from './tblCustBankWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustBankCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustBankCreateOrConnectWithoutTblCustomersInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustBankWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustBankCreateNestedOneWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustBankCreateNestedOneWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankCreateNestedOneWithoutTblCustomersInput>;
export const tblCustBankCreateNestedOneWithoutTblCustomersInputObjectZodSchema = makeSchema();
