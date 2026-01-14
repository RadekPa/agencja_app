import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersUpdateWithoutTblCustBankInputObjectSchema as tblCustomersUpdateWithoutTblCustBankInputObjectSchema } from './tblCustomersUpdateWithoutTblCustBankInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustBankInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustBankInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustBankInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutTblCustBankInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustBankInputObjectSchema)])
}).strict();
export const tblCustomersUpdateToOneWithWhereWithoutTblCustBankInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblCustBankInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblCustBankInput>;
export const tblCustomersUpdateToOneWithWhereWithoutTblCustBankInputObjectZodSchema = makeSchema();
