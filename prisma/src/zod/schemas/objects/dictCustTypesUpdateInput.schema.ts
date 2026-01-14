import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblCustTypesUpdateManyWithoutDictCustTypesNestedInputObjectSchema as tblCustTypesUpdateManyWithoutDictCustTypesNestedInputObjectSchema } from './tblCustTypesUpdateManyWithoutDictCustTypesNestedInput.schema'

const makeSchema = () => z.object({
  CustTypeName: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustTypeDesc: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblCustTypes: z.lazy(() => tblCustTypesUpdateManyWithoutDictCustTypesNestedInputObjectSchema).optional()
}).strict();
export const dictCustTypesUpdateInputObjectSchema: z.ZodType<Prisma.dictCustTypesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesUpdateInput>;
export const dictCustTypesUpdateInputObjectZodSchema = makeSchema();
