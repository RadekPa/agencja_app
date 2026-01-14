import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateWithoutTblCustBankInputObjectSchema as tblCustomersUpdateWithoutTblCustBankInputObjectSchema } from './tblCustomersUpdateWithoutTblCustBankInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustBankInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustBankInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustBankInput.schema';
import { tblCustomersCreateWithoutTblCustBankInputObjectSchema as tblCustomersCreateWithoutTblCustBankInputObjectSchema } from './tblCustomersCreateWithoutTblCustBankInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustBankInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutTblCustBankInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustBankInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustBankInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema)]),
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const tblCustomersUpsertWithoutTblCustBankInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithoutTblCustBankInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithoutTblCustBankInput>;
export const tblCustomersUpsertWithoutTblCustBankInputObjectZodSchema = makeSchema();
