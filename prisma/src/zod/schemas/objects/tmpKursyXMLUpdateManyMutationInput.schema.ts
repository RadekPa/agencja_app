import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  XMLData: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  LoadedDateTime: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tmpKursyXMLUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tmpKursyXMLUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tmpKursyXMLUpdateManyMutationInput>;
export const tmpKursyXMLUpdateManyMutationInputObjectZodSchema = makeSchema();
