import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyPriceTypeIncludeObjectSchema as dictRoyPriceTypeIncludeObjectSchema } from './objects/dictRoyPriceTypeInclude.schema';
import { dictRoyPriceTypeOrderByWithRelationInputObjectSchema as dictRoyPriceTypeOrderByWithRelationInputObjectSchema } from './objects/dictRoyPriceTypeOrderByWithRelationInput.schema';
import { dictRoyPriceTypeWhereInputObjectSchema as dictRoyPriceTypeWhereInputObjectSchema } from './objects/dictRoyPriceTypeWhereInput.schema';
import { dictRoyPriceTypeWhereUniqueInputObjectSchema as dictRoyPriceTypeWhereUniqueInputObjectSchema } from './objects/dictRoyPriceTypeWhereUniqueInput.schema';
import { DictRoyPriceTypeScalarFieldEnumSchema } from './enums/DictRoyPriceTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictRoyPriceTypeFindManySelectSchema: z.ZodType<Prisma.dictRoyPriceTypeSelect> = z.object({
    RoyPriceTypeID: z.boolean().optional(),
    RoyPriceTypeDesc: z.boolean().optional(),
    RoyPriceTypePL: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeSelect>;

export const dictRoyPriceTypeFindManySelectZodSchema = z.object({
    RoyPriceTypeID: z.boolean().optional(),
    RoyPriceTypeDesc: z.boolean().optional(),
    RoyPriceTypePL: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictRoyPriceTypeFindManySchema: z.ZodType<Prisma.dictRoyPriceTypeFindManyArgs> = z.object({ select: dictRoyPriceTypeFindManySelectSchema.optional(), include: z.lazy(() => dictRoyPriceTypeIncludeObjectSchema.optional()), orderBy: z.union([dictRoyPriceTypeOrderByWithRelationInputObjectSchema, dictRoyPriceTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyPriceTypeWhereInputObjectSchema.optional(), cursor: dictRoyPriceTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRoyPriceTypeScalarFieldEnumSchema, DictRoyPriceTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeFindManyArgs>;

export const dictRoyPriceTypeFindManyZodSchema = z.object({ select: dictRoyPriceTypeFindManySelectSchema.optional(), include: z.lazy(() => dictRoyPriceTypeIncludeObjectSchema.optional()), orderBy: z.union([dictRoyPriceTypeOrderByWithRelationInputObjectSchema, dictRoyPriceTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyPriceTypeWhereInputObjectSchema.optional(), cursor: dictRoyPriceTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRoyPriceTypeScalarFieldEnumSchema, DictRoyPriceTypeScalarFieldEnumSchema.array()]).optional() }).strict();