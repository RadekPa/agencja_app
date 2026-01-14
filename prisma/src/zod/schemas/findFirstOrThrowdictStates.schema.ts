import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesIncludeObjectSchema as dictStatesIncludeObjectSchema } from './objects/dictStatesInclude.schema';
import { dictStatesOrderByWithRelationInputObjectSchema as dictStatesOrderByWithRelationInputObjectSchema } from './objects/dictStatesOrderByWithRelationInput.schema';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './objects/dictStatesWhereInput.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './objects/dictStatesWhereUniqueInput.schema';
import { DictStatesScalarFieldEnumSchema } from './enums/DictStatesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictStatesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictStatesSelect> = z.object({
    StateID: z.boolean().optional(),
    CountryID: z.boolean().optional(),
    StateAbb: z.boolean().optional(),
    StateName: z.boolean().optional(),
    dictCountries_old: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictStatesSelect>;

export const dictStatesFindFirstOrThrowSelectZodSchema = z.object({
    StateID: z.boolean().optional(),
    CountryID: z.boolean().optional(),
    StateAbb: z.boolean().optional(),
    StateName: z.boolean().optional(),
    dictCountries_old: z.boolean().optional(),
    tblCustomers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictStatesFindFirstOrThrowSchema: z.ZodType<Prisma.dictStatesFindFirstOrThrowArgs> = z.object({ select: dictStatesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictStatesIncludeObjectSchema.optional()), orderBy: z.union([dictStatesOrderByWithRelationInputObjectSchema, dictStatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictStatesWhereInputObjectSchema.optional(), cursor: dictStatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictStatesScalarFieldEnumSchema, DictStatesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictStatesFindFirstOrThrowArgs>;

export const dictStatesFindFirstOrThrowZodSchema = z.object({ select: dictStatesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictStatesIncludeObjectSchema.optional()), orderBy: z.union([dictStatesOrderByWithRelationInputObjectSchema, dictStatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictStatesWhereInputObjectSchema.optional(), cursor: dictStatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictStatesScalarFieldEnumSchema, DictStatesScalarFieldEnumSchema.array()]).optional() }).strict();