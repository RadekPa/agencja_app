import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblCustTypesUncheckedUpdateManyWithoutDictCustTypesNestedInputObjectSchema as tblCustTypesUncheckedUpdateManyWithoutDictCustTypesNestedInputObjectSchema } from './tblCustTypesUncheckedUpdateManyWithoutDictCustTypesNestedInput.schema'

const makeSchema = () => z.object({
  CustTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustTypeName: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustTypeDesc: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblCustTypes: z.lazy(() => tblCustTypesUncheckedUpdateManyWithoutDictCustTypesNestedInputObjectSchema).optional()
}).strict();
export const dictCustTypesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictCustTypesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesUncheckedUpdateInput>;
export const dictCustTypesUncheckedUpdateInputObjectZodSchema = makeSchema();
