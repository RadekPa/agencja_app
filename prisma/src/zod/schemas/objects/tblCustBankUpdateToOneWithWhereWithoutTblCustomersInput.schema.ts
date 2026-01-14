import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustBankWhereInputObjectSchema as tblCustBankWhereInputObjectSchema } from './tblCustBankWhereInput.schema';
import { tblCustBankUpdateWithoutTblCustomersInputObjectSchema as tblCustBankUpdateWithoutTblCustomersInputObjectSchema } from './tblCustBankUpdateWithoutTblCustomersInput.schema';
import { tblCustBankUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblCustBankUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblCustBankUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustBankWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustBankUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustBankUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustBankUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustBankUpdateToOneWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankUpdateToOneWithWhereWithoutTblCustomersInput>;
export const tblCustBankUpdateToOneWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
