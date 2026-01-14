import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  DistID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  DistDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictDistributionTypeUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUncheckedUpdateManyInput>;
export const dictDistributionTypeUncheckedUpdateManyInputObjectZodSchema = makeSchema();
