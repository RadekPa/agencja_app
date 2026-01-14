import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const tblseriesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblSeriesScalarWhereInputObjectSchema), z.lazy(() => tblSeriesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblSeriesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblSeriesScalarWhereInputObjectSchema), z.lazy(() => tblSeriesScalarWhereInputObjectSchema).array()]).optional(),
  SeriesID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  SeriesFullName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  SeriesShortName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const tblSeriesScalarWhereInputObjectSchema: z.ZodType<Prisma.tblSeriesScalarWhereInput> = tblseriesscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblSeriesScalarWhereInput>;
export const tblSeriesScalarWhereInputObjectZodSchema = tblseriesscalarwhereinputSchema;
