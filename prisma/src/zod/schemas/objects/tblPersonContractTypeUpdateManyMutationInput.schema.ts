import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CTypeDescr: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tblPersonContractTypeUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonContractTypeUpdateManyMutationInput>;
export const tblPersonContractTypeUpdateManyMutationInputObjectZodSchema = makeSchema();
