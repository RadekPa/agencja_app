import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  ExcludeReasonCode: z.union([z.string().max(3), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ExcludeReasonDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictAdvWithoutInvExcludeReasonUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonUpdateManyMutationInput>;
export const dictAdvWithoutInvExcludeReasonUpdateManyMutationInputObjectZodSchema = makeSchema();
