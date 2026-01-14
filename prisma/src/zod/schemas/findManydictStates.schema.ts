import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesIncludeObjectSchema as dictStatesIncludeObjectSchema } from './objects/dictStatesInclude.schema';
import { dictStatesOrderByWithRelationInputObjectSchema as dictStatesOrderByWithRelationInputObjectSchema } from './objects/dictStatesOrderByWithRelationInput.schema';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './objects/dictStatesWhereInput.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './objects/dictStatesWhereUniqueInput.schema';
import { DictStatesScalarFieldEnumSchema } from './enums/DictStatesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictStatesFindManySelectSchema: z.ZodType<Prisma.dictStatesSelect> = z.object({
    StateID: z.boolean().optional(),
    CountryID: z.boolean().optional(),
    StateAbb: z.boolean().optional(),
    StateName: z.boolean().optional(),
    dictCountries_old: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictStatesSelect>;

export const dictStatesFindManySelectZodSchema = z.object({
    StateID: z.boolean().optional(),
    CountryID: z.boolean().optional(),
    StateAbb: z.boolean().optional(),
    StateName: z.boolean().optional(),
    dictCountries_old: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictStatesFindManySchema: z.ZodType<Prisma.dictStatesFindManyArgs> = z.object({ select: dictStatesFindManySelectSchema.optional(), include: z.lazy(() => dictStatesIncludeObjectSchema.optional()), orderBy: z.union([dictStatesOrderByWithRelationInputObjectSchema, dictStatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictStatesWhereInputObjectSchema.optional(), cursor: dictStatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictStatesScalarFieldEnumSchema, DictStatesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictStatesFindManyArgs>;

export const dictStatesFindManyZodSchema = z.object({ select: dictStatesFindManySelectSchema.optional(), include: z.lazy(() => dictStatesIncludeObjectSchema.optional()), orderBy: z.union([dictStatesOrderByWithRelationInputObjectSchema, dictStatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictStatesWhereInputObjectSchema.optional(), cursor: dictStatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictStatesScalarFieldEnumSchema, DictStatesScalarFieldEnumSchema.array()]).optional() }).strict();