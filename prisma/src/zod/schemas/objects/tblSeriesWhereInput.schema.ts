import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblCustomersNullableScalarRelationFilterObjectSchema as TblCustomersNullableScalarRelationFilterObjectSchema } from './TblCustomersNullableScalarRelationFilter.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const tblserieswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblSeriesWhereInputObjectSchema), z.lazy(() => tblSeriesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblSeriesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblSeriesWhereInputObjectSchema), z.lazy(() => tblSeriesWhereInputObjectSchema).array()]).optional(),
  SeriesID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  SeriesFullName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  SeriesShortName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  tblCustomers: z.union([z.lazy(() => TblCustomersNullableScalarRelationFilterObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional()
}).strict();
export const tblSeriesWhereInputObjectSchema: z.ZodType<Prisma.tblSeriesWhereInput> = tblserieswhereinputSchema as unknown as z.ZodType<Prisma.tblSeriesWhereInput>;
export const tblSeriesWhereInputObjectZodSchema = tblserieswhereinputSchema;
