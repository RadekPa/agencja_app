import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema'

const dictxrateswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictXRatesWhereInputObjectSchema), z.lazy(() => dictXRatesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictXRatesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictXRatesWhereInputObjectSchema), z.lazy(() => dictXRatesWhereInputObjectSchema).array()]).optional(),
  CurrDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  CurrID: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(3)]).optional(),
  XRate: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional()
}).strict();
export const dictXRatesWhereInputObjectSchema: z.ZodType<Prisma.dictXRatesWhereInput> = dictxrateswhereinputSchema as unknown as z.ZodType<Prisma.dictXRatesWhereInput>;
export const dictXRatesWhereInputObjectZodSchema = dictxrateswhereinputSchema;
