import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustBankCreateWithoutTblCustomersInputObjectSchema as tblCustBankCreateWithoutTblCustomersInputObjectSchema } from './tblCustBankCreateWithoutTblCustomersInput.schema';
import { tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustBankUncheckedCreateWithoutTblCustomersInput.schema';
import { tblCustBankCreateOrConnectWithoutTblCustomersInputObjectSchema as tblCustBankCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblCustBankCreateOrConnectWithoutTblCustomersInput.schema';
import { tblCustBankUpsertWithoutTblCustomersInputObjectSchema as tblCustBankUpsertWithoutTblCustomersInputObjectSchema } from './tblCustBankUpsertWithoutTblCustomersInput.schema';
import { tblCustBankWhereInputObjectSchema as tblCustBankWhereInputObjectSchema } from './tblCustBankWhereInput.schema';
import { tblCustBankWhereUniqueInputObjectSchema as tblCustBankWhereUniqueInputObjectSchema } from './tblCustBankWhereUniqueInput.schema';
import { tblCustBankUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema as tblCustBankUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema } from './tblCustBankUpdateToOneWithWhereWithoutTblCustomersInput.schema';
import { tblCustBankUpdateWithoutTblCustomersInputObjectSchema as tblCustBankUpdateWithoutTblCustomersInputObjectSchema } from './tblCustBankUpdateWithoutTblCustomersInput.schema';
import { tblCustBankUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblCustBankUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblCustBankUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustBankCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustBankUncheckedCreateWithoutTblCustomersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustBankCreateOrConnectWithoutTblCustomersInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustBankUpsertWithoutTblCustomersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblCustBankWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblCustBankWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblCustBankWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustBankUpdateToOneWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustBankUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustBankUncheckedUpdateWithoutTblCustomersInputObjectSchema)]).optional()
}).strict();
export const tblCustBankUncheckedUpdateOneWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.tblCustBankUncheckedUpdateOneWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankUncheckedUpdateOneWithoutTblCustomersNestedInput>;
export const tblCustBankUncheckedUpdateOneWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
