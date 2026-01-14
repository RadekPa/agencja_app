import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CustTypeName: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustTypeDesc: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictCustTypesUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.dictCustTypesUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesUpdateManyMutationInput>;
export const dictCustTypesUpdateManyMutationInputObjectZodSchema = makeSchema();
