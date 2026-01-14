import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SeriesID: z.number().int().optional(),
  SeriesFullName: z.string().optional().nullable(),
  SeriesShortName: z.string().optional().nullable()
}).strict();
export const tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSeriesUncheckedCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesUncheckedCreateWithoutTblCustomersInput>;
export const tblSeriesUncheckedCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
