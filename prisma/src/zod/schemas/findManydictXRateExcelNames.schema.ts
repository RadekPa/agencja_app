import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRateExcelNamesOrderByWithRelationInputObjectSchema as dictXRateExcelNamesOrderByWithRelationInputObjectSchema } from './objects/dictXRateExcelNamesOrderByWithRelationInput.schema';
import { dictXRateExcelNamesWhereInputObjectSchema as dictXRateExcelNamesWhereInputObjectSchema } from './objects/dictXRateExcelNamesWhereInput.schema';
import { dictXRateExcelNamesWhereUniqueInputObjectSchema as dictXRateExcelNamesWhereUniqueInputObjectSchema } from './objects/dictXRateExcelNamesWhereUniqueInput.schema';
import { DictXRateExcelNamesScalarFieldEnumSchema } from './enums/DictXRateExcelNamesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictXRateExcelNamesFindManySelectSchema: z.ZodType<Prisma.dictXRateExcelNamesSelect> = z.object({
    CurrID: z.boolean().optional(),
    Name: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictXRateExcelNamesSelect>;

export const dictXRateExcelNamesFindManySelectZodSchema = z.object({
    CurrID: z.boolean().optional(),
    Name: z.boolean().optional()
  }).strict();

export const dictXRateExcelNamesFindManySchema: z.ZodType<Prisma.dictXRateExcelNamesFindManyArgs> = z.object({ select: dictXRateExcelNamesFindManySelectSchema.optional(),  orderBy: z.union([dictXRateExcelNamesOrderByWithRelationInputObjectSchema, dictXRateExcelNamesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictXRateExcelNamesWhereInputObjectSchema.optional(), cursor: dictXRateExcelNamesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictXRateExcelNamesScalarFieldEnumSchema, DictXRateExcelNamesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictXRateExcelNamesFindManyArgs>;

export const dictXRateExcelNamesFindManyZodSchema = z.object({ select: dictXRateExcelNamesFindManySelectSchema.optional(),  orderBy: z.union([dictXRateExcelNamesOrderByWithRelationInputObjectSchema, dictXRateExcelNamesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictXRateExcelNamesWhereInputObjectSchema.optional(), cursor: dictXRateExcelNamesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictXRateExcelNamesScalarFieldEnumSchema, DictXRateExcelNamesScalarFieldEnumSchema.array()]).optional() }).strict();