import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblCustomersUpdateOneWithoutTblSeriesNestedInputObjectSchema as tblCustomersUpdateOneWithoutTblSeriesNestedInputObjectSchema } from './tblCustomersUpdateOneWithoutTblSeriesNestedInput.schema'

const makeSchema = () => z.object({
  SeriesFullName: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SeriesShortName: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneWithoutTblSeriesNestedInputObjectSchema).optional()
}).strict();
export const tblSeriesUpdateInputObjectSchema: z.ZodType<Prisma.tblSeriesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesUpdateInput>;
export const tblSeriesUpdateInputObjectZodSchema = makeSchema();
