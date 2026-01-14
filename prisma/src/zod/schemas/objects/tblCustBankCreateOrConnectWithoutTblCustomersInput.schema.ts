import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustBankWhereUniqueInputObjectSchema as tblCustBankWhereUniqueInputObjectSchema } from './tblCustBankWhereUniqueInput.schema';
import { tblCustBankCreateWithoutTblCustomersInputObjectSchema as tblCustBankCreateWithoutTblCustomersInputObjectSchema } from './tblCustBankCreateWithoutTblCustomersInput.schema';
import { tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustBankUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustBankWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustBankCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustBankCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustBankCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankCreateOrConnectWithoutTblCustomersInput>;
export const tblCustBankCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
