import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableBytesFieldUpdateOperationsInputObjectSchema as NullableBytesFieldUpdateOperationsInputObjectSchema } from './NullableBytesFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(128), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  principal_id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  version: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  definition: z.union([z.instanceof(Uint8Array), z.lazy(() => NullableBytesFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const sysdiagramsUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.sysdiagramsUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.sysdiagramsUpdateManyMutationInput>;
export const sysdiagramsUpdateManyMutationInputObjectZodSchema = makeSchema();
