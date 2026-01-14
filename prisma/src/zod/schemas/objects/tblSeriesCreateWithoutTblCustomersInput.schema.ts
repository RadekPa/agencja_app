import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SeriesFullName: z.string().max(150).optional().nullable(),
  SeriesShortName: z.string().max(50).optional().nullable()
}).strict();
export const tblSeriesCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSeriesCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesCreateWithoutTblCustomersInput>;
export const tblSeriesCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
