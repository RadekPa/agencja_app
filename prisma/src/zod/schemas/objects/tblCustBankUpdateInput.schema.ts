import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblCustomersUpdateOneRequiredWithoutTblCustBankNestedInputObjectSchema as tblCustomersUpdateOneRequiredWithoutTblCustBankNestedInputObjectSchema } from './tblCustomersUpdateOneRequiredWithoutTblCustBankNestedInput.schema'

const makeSchema = () => z.object({
  BankName: z.union([z.string().max(150), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  BankAddress: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AccountNo: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RoutingNo: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AccountName: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneRequiredWithoutTblCustBankNestedInputObjectSchema).optional()
}).strict();
export const tblCustBankUpdateInputObjectSchema: z.ZodType<Prisma.tblCustBankUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankUpdateInput>;
export const tblCustBankUpdateInputObjectZodSchema = makeSchema();
