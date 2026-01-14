import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblCustBankInputObjectSchema as tblCustomersCreateWithoutTblCustBankInputObjectSchema } from './tblCustomersCreateWithoutTblCustBankInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustBankInput.schema';
import { tblCustomersCreateOrConnectWithoutTblCustBankInputObjectSchema as tblCustomersCreateOrConnectWithoutTblCustBankInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblCustBankInput.schema';
import { tblCustomersUpsertWithoutTblCustBankInputObjectSchema as tblCustomersUpsertWithoutTblCustBankInputObjectSchema } from './tblCustomersUpsertWithoutTblCustBankInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateToOneWithWhereWithoutTblCustBankInputObjectSchema as tblCustomersUpdateToOneWithWhereWithoutTblCustBankInputObjectSchema } from './tblCustomersUpdateToOneWithWhereWithoutTblCustBankInput.schema';
import { tblCustomersUpdateWithoutTblCustBankInputObjectSchema as tblCustomersUpdateWithoutTblCustBankInputObjectSchema } from './tblCustomersUpdateWithoutTblCustBankInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustBankInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustBankInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustBankInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustBankInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustBankInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblCustBankInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustomersUpsertWithoutTblCustBankInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateToOneWithWhereWithoutTblCustBankInputObjectSchema), z.lazy(() => tblCustomersUpdateWithoutTblCustBankInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustBankInputObjectSchema)]).optional()
}).strict();
export const tblCustomersUpdateOneRequiredWithoutTblCustBankNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblCustBankNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblCustBankNestedInput>;
export const tblCustomersUpdateOneRequiredWithoutTblCustBankNestedInputObjectZodSchema = makeSchema();
