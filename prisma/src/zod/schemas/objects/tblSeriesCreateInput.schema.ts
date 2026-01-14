import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateNestedOneWithoutTblSeriesInputObjectSchema as tblCustomersCreateNestedOneWithoutTblSeriesInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblSeriesInput.schema'

const makeSchema = () => z.object({
  SeriesFullName: z.string().max(150).optional().nullable(),
  SeriesShortName: z.string().max(50).optional().nullable(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblSeriesInputObjectSchema).optional()
}).strict();
export const tblSeriesCreateInputObjectSchema: z.ZodType<Prisma.tblSeriesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesCreateInput>;
export const tblSeriesCreateInputObjectZodSchema = makeSchema();
