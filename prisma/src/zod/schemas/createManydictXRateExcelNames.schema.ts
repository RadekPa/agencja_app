import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRateExcelNamesCreateManyInputObjectSchema as dictXRateExcelNamesCreateManyInputObjectSchema } from './objects/dictXRateExcelNamesCreateManyInput.schema';

export const dictXRateExcelNamesCreateManySchema: z.ZodType<Prisma.dictXRateExcelNamesCreateManyArgs> = z.object({ data: z.union([ dictXRateExcelNamesCreateManyInputObjectSchema, z.array(dictXRateExcelNamesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictXRateExcelNamesCreateManyArgs>;

export const dictXRateExcelNamesCreateManyZodSchema = z.object({ data: z.union([ dictXRateExcelNamesCreateManyInputObjectSchema, z.array(dictXRateExcelNamesCreateManyInputObjectSchema) ]),  }).strict();