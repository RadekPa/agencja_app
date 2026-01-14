import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  SeriesFullName: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SeriesShortName: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const tblSeriesUpdateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSeriesUpdateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesUpdateWithoutTblCustomersInput>;
export const tblSeriesUpdateWithoutTblCustomersInputObjectZodSchema = makeSchema();
