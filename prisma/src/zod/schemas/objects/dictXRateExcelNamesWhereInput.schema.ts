import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const dictxrateexcelnameswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictXRateExcelNamesWhereInputObjectSchema), z.lazy(() => dictXRateExcelNamesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictXRateExcelNamesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictXRateExcelNamesWhereInputObjectSchema), z.lazy(() => dictXRateExcelNamesWhereInputObjectSchema).array()]).optional(),
  CurrID: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(3)]).optional(),
  Name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional()
}).strict();
export const dictXRateExcelNamesWhereInputObjectSchema: z.ZodType<Prisma.dictXRateExcelNamesWhereInput> = dictxrateexcelnameswhereinputSchema as unknown as z.ZodType<Prisma.dictXRateExcelNamesWhereInput>;
export const dictXRateExcelNamesWhereInputObjectZodSchema = dictxrateexcelnameswhereinputSchema;
