import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitMainClassIncludeObjectSchema as dictTitMainClassIncludeObjectSchema } from './objects/dictTitMainClassInclude.schema';
import { dictTitMainClassOrderByWithRelationInputObjectSchema as dictTitMainClassOrderByWithRelationInputObjectSchema } from './objects/dictTitMainClassOrderByWithRelationInput.schema';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './objects/dictTitMainClassWhereInput.schema';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './objects/dictTitMainClassWhereUniqueInput.schema';
import { DictTitMainClassScalarFieldEnumSchema } from './enums/DictTitMainClassScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictTitMainClassFindManySelectSchema: z.ZodType<Prisma.dictTitMainClassSelect> = z.object({
    ClassCode: z.boolean().optional(),
    ClassDesc: z.boolean().optional(),
    dictTitSubClass: z.boolean().optional(),
    tblMailingLists: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassSelect>;

export const dictTitMainClassFindManySelectZodSchema = z.object({
    ClassCode: z.boolean().optional(),
    ClassDesc: z.boolean().optional(),
    dictTitSubClass: z.boolean().optional(),
    tblMailingLists: z.boolean().optional(),
    tblTitles: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictTitMainClassFindManySchema: z.ZodType<Prisma.dictTitMainClassFindManyArgs> = z.object({ select: dictTitMainClassFindManySelectSchema.optional(), include: z.lazy(() => dictTitMainClassIncludeObjectSchema.optional()), orderBy: z.union([dictTitMainClassOrderByWithRelationInputObjectSchema, dictTitMainClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictTitMainClassWhereInputObjectSchema.optional(), cursor: dictTitMainClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictTitMainClassScalarFieldEnumSchema, DictTitMainClassScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassFindManyArgs>;

export const dictTitMainClassFindManyZodSchema = z.object({ select: dictTitMainClassFindManySelectSchema.optional(), include: z.lazy(() => dictTitMainClassIncludeObjectSchema.optional()), orderBy: z.union([dictTitMainClassOrderByWithRelationInputObjectSchema, dictTitMainClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictTitMainClassWhereInputObjectSchema.optional(), cursor: dictTitMainClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictTitMainClassScalarFieldEnumSchema, DictTitMainClassScalarFieldEnumSchema.array()]).optional() }).strict();