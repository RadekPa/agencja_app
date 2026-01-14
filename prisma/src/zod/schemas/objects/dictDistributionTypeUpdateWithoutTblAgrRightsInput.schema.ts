import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  DistDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUpdateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUpdateWithoutTblAgrRightsInput>;
export const dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
