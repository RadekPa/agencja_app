import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyPriceTypeIncludeObjectSchema as dictRoyPriceTypeIncludeObjectSchema } from './objects/dictRoyPriceTypeInclude.schema';
import { dictRoyPriceTypeOrderByWithRelationInputObjectSchema as dictRoyPriceTypeOrderByWithRelationInputObjectSchema } from './objects/dictRoyPriceTypeOrderByWithRelationInput.schema';
import { dictRoyPriceTypeWhereInputObjectSchema as dictRoyPriceTypeWhereInputObjectSchema } from './objects/dictRoyPriceTypeWhereInput.schema';
import { dictRoyPriceTypeWhereUniqueInputObjectSchema as dictRoyPriceTypeWhereUniqueInputObjectSchema } from './objects/dictRoyPriceTypeWhereUniqueInput.schema';
import { DictRoyPriceTypeScalarFieldEnumSchema } from './enums/DictRoyPriceTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictRoyPriceTypeFindFirstSelectSchema: z.ZodType<Prisma.dictRoyPriceTypeSelect> = z.object({
    RoyPriceTypeID: z.boolean().optional(),
    RoyPriceTypeDesc: z.boolean().optional(),
    RoyPriceTypePL: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeSelect>;

export const dictRoyPriceTypeFindFirstSelectZodSchema = z.object({
    RoyPriceTypeID: z.boolean().optional(),
    RoyPriceTypeDesc: z.boolean().optional(),
    RoyPriceTypePL: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictRoyPriceTypeFindFirstSchema: z.ZodType<Prisma.dictRoyPriceTypeFindFirstArgs> = z.object({ select: dictRoyPriceTypeFindFirstSelectSchema.optional(), include: z.lazy(() => dictRoyPriceTypeIncludeObjectSchema.optional()), orderBy: z.union([dictRoyPriceTypeOrderByWithRelationInputObjectSchema, dictRoyPriceTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyPriceTypeWhereInputObjectSchema.optional(), cursor: dictRoyPriceTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRoyPriceTypeScalarFieldEnumSchema, DictRoyPriceTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeFindFirstArgs>;

export const dictRoyPriceTypeFindFirstZodSchema = z.object({ select: dictRoyPriceTypeFindFirstSelectSchema.optional(), include: z.lazy(() => dictRoyPriceTypeIncludeObjectSchema.optional()), orderBy: z.union([dictRoyPriceTypeOrderByWithRelationInputObjectSchema, dictRoyPriceTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyPriceTypeWhereInputObjectSchema.optional(), cursor: dictRoyPriceTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRoyPriceTypeScalarFieldEnumSchema, DictRoyPriceTypeScalarFieldEnumSchema.array()]).optional() }).strict();