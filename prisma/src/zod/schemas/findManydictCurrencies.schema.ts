import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCurrenciesIncludeObjectSchema as dictCurrenciesIncludeObjectSchema } from './objects/dictCurrenciesInclude.schema';
import { dictCurrenciesOrderByWithRelationInputObjectSchema as dictCurrenciesOrderByWithRelationInputObjectSchema } from './objects/dictCurrenciesOrderByWithRelationInput.schema';
import { dictCurrenciesWhereInputObjectSchema as dictCurrenciesWhereInputObjectSchema } from './objects/dictCurrenciesWhereInput.schema';
import { dictCurrenciesWhereUniqueInputObjectSchema as dictCurrenciesWhereUniqueInputObjectSchema } from './objects/dictCurrenciesWhereUniqueInput.schema';
import { DictCurrenciesScalarFieldEnumSchema } from './enums/DictCurrenciesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictCurrenciesFindManySelectSchema: z.ZodType<Prisma.dictCurrenciesSelect> = z.object({
    CurrID: z.boolean().optional(),
    CurrDesc: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesSelect>;

export const dictCurrenciesFindManySelectZodSchema = z.object({
    CurrID: z.boolean().optional(),
    CurrDesc: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictCurrenciesFindManySchema: z.ZodType<Prisma.dictCurrenciesFindManyArgs> = z.object({ select: dictCurrenciesFindManySelectSchema.optional(), include: z.lazy(() => dictCurrenciesIncludeObjectSchema.optional()), orderBy: z.union([dictCurrenciesOrderByWithRelationInputObjectSchema, dictCurrenciesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCurrenciesWhereInputObjectSchema.optional(), cursor: dictCurrenciesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCurrenciesScalarFieldEnumSchema, DictCurrenciesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesFindManyArgs>;

export const dictCurrenciesFindManyZodSchema = z.object({ select: dictCurrenciesFindManySelectSchema.optional(), include: z.lazy(() => dictCurrenciesIncludeObjectSchema.optional()), orderBy: z.union([dictCurrenciesOrderByWithRelationInputObjectSchema, dictCurrenciesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCurrenciesWhereInputObjectSchema.optional(), cursor: dictCurrenciesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCurrenciesScalarFieldEnumSchema, DictCurrenciesScalarFieldEnumSchema.array()]).optional() }).strict();