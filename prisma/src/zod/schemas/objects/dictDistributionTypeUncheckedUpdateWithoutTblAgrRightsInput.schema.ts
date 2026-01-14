import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  DistID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  DistDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInput>;
export const dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
