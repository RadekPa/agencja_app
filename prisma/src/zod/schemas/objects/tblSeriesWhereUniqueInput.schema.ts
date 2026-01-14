import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SeriesID: z.number().int().optional()
}).strict();
export const tblSeriesWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblSeriesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesWhereUniqueInput>;
export const tblSeriesWhereUniqueInputObjectZodSchema = makeSchema();
