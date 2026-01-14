import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SeriesFullName: z.string().max(150).optional().nullable(),
  SeriesShortName: z.string().max(50).optional().nullable()
}).strict();
export const tblSeriesCreateManyTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSeriesCreateManyTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesCreateManyTblCustomersInput>;
export const tblSeriesCreateManyTblCustomersInputObjectZodSchema = makeSchema();
