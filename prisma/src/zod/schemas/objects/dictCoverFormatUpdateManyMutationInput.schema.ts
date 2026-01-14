import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CoverFormatDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictCoverFormatUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.dictCoverFormatUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatUpdateManyMutationInput>;
export const dictCoverFormatUpdateManyMutationInputObjectZodSchema = makeSchema();
