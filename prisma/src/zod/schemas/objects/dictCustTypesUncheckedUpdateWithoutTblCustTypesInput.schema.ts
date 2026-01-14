import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CustTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustTypeName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustTypeDesc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.dictCustTypesUncheckedUpdateWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesUncheckedUpdateWithoutTblCustTypesInput>;
export const dictCustTypesUncheckedUpdateWithoutTblCustTypesInputObjectZodSchema = makeSchema();
