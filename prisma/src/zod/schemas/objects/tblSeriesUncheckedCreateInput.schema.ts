import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SeriesID: z.number().int().optional(),
  CustID: z.number().int().optional().nullable(),
  SeriesFullName: z.string().max(150).optional().nullable(),
  SeriesShortName: z.string().max(50).optional().nullable()
}).strict();
export const tblSeriesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblSeriesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesUncheckedCreateInput>;
export const tblSeriesUncheckedCreateInputObjectZodSchema = makeSchema();
