import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRatesOrderByWithRelationInputObjectSchema as dictXRatesOrderByWithRelationInputObjectSchema } from './objects/dictXRatesOrderByWithRelationInput.schema';
import { dictXRatesWhereInputObjectSchema as dictXRatesWhereInputObjectSchema } from './objects/dictXRatesWhereInput.schema';
import { dictXRatesWhereUniqueInputObjectSchema as dictXRatesWhereUniqueInputObjectSchema } from './objects/dictXRatesWhereUniqueInput.schema';
import { DictXRatesScalarFieldEnumSchema } from './enums/DictXRatesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictXRatesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictXRatesSelect> = z.object({
    CurrDate: z.boolean().optional(),
    CurrID: z.boolean().optional(),
    XRate: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictXRatesSelect>;

export const dictXRatesFindFirstOrThrowSelectZodSchema = z.object({
    CurrDate: z.boolean().optional(),
    CurrID: z.boolean().optional(),
    XRate: z.boolean().optional()
  }).strict();

export const dictXRatesFindFirstOrThrowSchema: z.ZodType<Prisma.dictXRatesFindFirstOrThrowArgs> = z.object({ select: dictXRatesFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([dictXRatesOrderByWithRelationInputObjectSchema, dictXRatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictXRatesWhereInputObjectSchema.optional(), cursor: dictXRatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictXRatesScalarFieldEnumSchema, DictXRatesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictXRatesFindFirstOrThrowArgs>;

export const dictXRatesFindFirstOrThrowZodSchema = z.object({ select: dictXRatesFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([dictXRatesOrderByWithRelationInputObjectSchema, dictXRatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictXRatesWhereInputObjectSchema.optional(), cursor: dictXRatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictXRatesScalarFieldEnumSchema, DictXRatesScalarFieldEnumSchema.array()]).optional() }).strict();