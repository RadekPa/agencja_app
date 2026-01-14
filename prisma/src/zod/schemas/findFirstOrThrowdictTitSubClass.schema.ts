import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitSubClassIncludeObjectSchema as dictTitSubClassIncludeObjectSchema } from './objects/dictTitSubClassInclude.schema';
import { dictTitSubClassOrderByWithRelationInputObjectSchema as dictTitSubClassOrderByWithRelationInputObjectSchema } from './objects/dictTitSubClassOrderByWithRelationInput.schema';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './objects/dictTitSubClassWhereInput.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './objects/dictTitSubClassWhereUniqueInput.schema';
import { DictTitSubClassScalarFieldEnumSchema } from './enums/DictTitSubClassScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictTitSubClassFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictTitSubClassSelect> = z.object({
    SubClassCode: z.boolean().optional(),
    ClassCode: z.boolean().optional(),
    SubClassDesc: z.boolean().optional(),
    dictTitMainClass: z.boolean().optional(),
    tblMailingLists: z.boolean().optional(),
    tblTitSubClass: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassSelect>;

export const dictTitSubClassFindFirstOrThrowSelectZodSchema = z.object({
    SubClassCode: z.boolean().optional(),
    ClassCode: z.boolean().optional(),
    SubClassDesc: z.boolean().optional(),
    dictTitMainClass: z.boolean().optional(),
    tblMailingLists: z.boolean().optional(),
    tblTitSubClass: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictTitSubClassFindFirstOrThrowSchema: z.ZodType<Prisma.dictTitSubClassFindFirstOrThrowArgs> = z.object({ select: dictTitSubClassFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictTitSubClassIncludeObjectSchema.optional()), orderBy: z.union([dictTitSubClassOrderByWithRelationInputObjectSchema, dictTitSubClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictTitSubClassWhereInputObjectSchema.optional(), cursor: dictTitSubClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictTitSubClassScalarFieldEnumSchema, DictTitSubClassScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassFindFirstOrThrowArgs>;

export const dictTitSubClassFindFirstOrThrowZodSchema = z.object({ select: dictTitSubClassFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictTitSubClassIncludeObjectSchema.optional()), orderBy: z.union([dictTitSubClassOrderByWithRelationInputObjectSchema, dictTitSubClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictTitSubClassWhereInputObjectSchema.optional(), cursor: dictTitSubClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictTitSubClassScalarFieldEnumSchema, DictTitSubClassScalarFieldEnumSchema.array()]).optional() }).strict();