import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  BankName: z.union([z.string().max(150), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  BankAddress: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AccountNo: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RoutingNo: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  AccountName: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tblCustBankUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblCustBankUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankUpdateManyMutationInput>;
export const tblCustBankUpdateManyMutationInputObjectZodSchema = makeSchema();
