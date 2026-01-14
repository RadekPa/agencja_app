import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  SeriesID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  SeriesFullName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SeriesShortName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tblSeriesUncheckedUpdateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSeriesUncheckedUpdateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesUncheckedUpdateWithoutTblCustomersInput>;
export const tblSeriesUncheckedUpdateWithoutTblCustomersInputObjectZodSchema = makeSchema();
