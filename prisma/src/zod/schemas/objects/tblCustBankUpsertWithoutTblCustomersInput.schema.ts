import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustBankUpdateWithoutTblCustomersInputObjectSchema as tblCustBankUpdateWithoutTblCustomersInputObjectSchema } from './tblCustBankUpdateWithoutTblCustomersInput.schema';
import { tblCustBankUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblCustBankUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblCustBankUncheckedUpdateWithoutTblCustomersInput.schema';
import { tblCustBankCreateWithoutTblCustomersInputObjectSchema as tblCustBankCreateWithoutTblCustomersInputObjectSchema } from './tblCustBankCreateWithoutTblCustomersInput.schema';
import { tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustBankUncheckedCreateWithoutTblCustomersInput.schema';
import { tblCustBankWhereInputObjectSchema as tblCustBankWhereInputObjectSchema } from './tblCustBankWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustBankUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustBankUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustBankCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema)]),
  where: z.lazy(() => tblCustBankWhereInputObjectSchema).optional()
}).strict();
export const tblCustBankUpsertWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustBankUpsertWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankUpsertWithoutTblCustomersInput>;
export const tblCustBankUpsertWithoutTblCustomersInputObjectZodSchema = makeSchema();
