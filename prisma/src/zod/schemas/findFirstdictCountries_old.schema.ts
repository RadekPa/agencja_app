import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountries_oldIncludeObjectSchema as dictCountries_oldIncludeObjectSchema } from './objects/dictCountries_oldInclude.schema';
import { dictCountries_oldOrderByWithRelationInputObjectSchema as dictCountries_oldOrderByWithRelationInputObjectSchema } from './objects/dictCountries_oldOrderByWithRelationInput.schema';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './objects/dictCountries_oldWhereInput.schema';
import { dictCountries_oldWhereUniqueInputObjectSchema as dictCountries_oldWhereUniqueInputObjectSchema } from './objects/dictCountries_oldWhereUniqueInput.schema';
import { DictCountriesOldScalarFieldEnumSchema } from './enums/DictCountriesOldScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictCountries_oldFindFirstSelectSchema: z.ZodType<Prisma.dictCountries_oldSelect> = z.object({
    CountryID: z.boolean().optional(),
    CountryDesc: z.boolean().optional(),
    CountryPL: z.boolean().optional(),
    Tax: z.boolean().optional(),
    Code: z.boolean().optional(),
    EU: z.boolean().optional(),
    dictStates: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictCountries_oldSelect>;

export const dictCountries_oldFindFirstSelectZodSchema = z.object({
    CountryID: z.boolean().optional(),
    CountryDesc: z.boolean().optional(),
    CountryPL: z.boolean().optional(),
    Tax: z.boolean().optional(),
    Code: z.boolean().optional(),
    EU: z.boolean().optional(),
    dictStates: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictCountries_oldFindFirstSchema: z.ZodType<Prisma.dictCountries_oldFindFirstArgs> = z.object({ select: dictCountries_oldFindFirstSelectSchema.optional(), include: z.lazy(() => dictCountries_oldIncludeObjectSchema.optional()), orderBy: z.union([dictCountries_oldOrderByWithRelationInputObjectSchema, dictCountries_oldOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCountries_oldWhereInputObjectSchema.optional(), cursor: dictCountries_oldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCountriesOldScalarFieldEnumSchema, DictCountriesOldScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCountries_oldFindFirstArgs>;

export const dictCountries_oldFindFirstZodSchema = z.object({ select: dictCountries_oldFindFirstSelectSchema.optional(), include: z.lazy(() => dictCountries_oldIncludeObjectSchema.optional()), orderBy: z.union([dictCountries_oldOrderByWithRelationInputObjectSchema, dictCountries_oldOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCountries_oldWhereInputObjectSchema.optional(), cursor: dictCountries_oldWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCountriesOldScalarFieldEnumSchema, DictCountriesOldScalarFieldEnumSchema.array()]).optional() }).strict();