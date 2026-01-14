import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutTblCustBankInputObjectSchema as tblCustomersCreateWithoutTblCustBankInputObjectSchema } from './tblCustomersCreateWithoutTblCustBankInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustBankInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustBankInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutTblCustBankInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblCustBankInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblCustBankInput>;
export const tblCustomersCreateOrConnectWithoutTblCustBankInputObjectZodSchema = makeSchema();
