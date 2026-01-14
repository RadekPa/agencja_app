import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountriesOrderByWithRelationInputObjectSchema as dictCountriesOrderByWithRelationInputObjectSchema } from './objects/dictCountriesOrderByWithRelationInput.schema';
import { dictCountriesWhereInputObjectSchema as dictCountriesWhereInputObjectSchema } from './objects/dictCountriesWhereInput.schema';
import { dictCountriesWhereUniqueInputObjectSchema as dictCountriesWhereUniqueInputObjectSchema } from './objects/dictCountriesWhereUniqueInput.schema';
import { DictCountriesScalarFieldEnumSchema } from './enums/DictCountriesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictCountriesFindFirstSelectSchema: z.ZodType<Prisma.dictCountriesSelect> = z.object({
    CountryID: z.boolean().optional(),
    CountryDesc: z.boolean().optional(),
    CountryPL: z.boolean().optional(),
    Tax: z.boolean().optional(),
    Code: z.boolean().optional(),
    EU: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictCountriesSelect>;

export const dictCountriesFindFirstSelectZodSchema = z.object({
    CountryID: z.boolean().optional(),
    CountryDesc: z.boolean().optional(),
    CountryPL: z.boolean().optional(),
    Tax: z.boolean().optional(),
    Code: z.boolean().optional(),
    EU: z.boolean().optional()
  }).strict();

export const dictCountriesFindFirstSchema: z.ZodType<Prisma.dictCountriesFindFirstArgs> = z.object({ select: dictCountriesFindFirstSelectSchema.optional(),  orderBy: z.union([dictCountriesOrderByWithRelationInputObjectSchema, dictCountriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCountriesWhereInputObjectSchema.optional(), cursor: dictCountriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCountriesScalarFieldEnumSchema, DictCountriesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCountriesFindFirstArgs>;

export const dictCountriesFindFirstZodSchema = z.object({ select: dictCountriesFindFirstSelectSchema.optional(),  orderBy: z.union([dictCountriesOrderByWithRelationInputObjectSchema, dictCountriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCountriesWhereInputObjectSchema.optional(), cursor: dictCountriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCountriesScalarFieldEnumSchema, DictCountriesScalarFieldEnumSchema.array()]).optional() }).strict();