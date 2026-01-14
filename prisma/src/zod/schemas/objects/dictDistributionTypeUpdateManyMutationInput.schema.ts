import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  DistDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictDistributionTypeUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUpdateManyMutationInput>;
export const dictDistributionTypeUpdateManyMutationInputObjectZodSchema = makeSchema();
