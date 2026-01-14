import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int().optional().nullable(),
  SeriesFullName: z.string().max(150).optional().nullable(),
  SeriesShortName: z.string().max(50).optional().nullable()
}).strict();
export const tblSeriesCreateManyInputObjectSchema: z.ZodType<Prisma.tblSeriesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesCreateManyInput>;
export const tblSeriesCreateManyInputObjectZodSchema = makeSchema();
