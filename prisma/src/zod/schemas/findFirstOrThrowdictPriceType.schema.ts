import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictPriceTypeIncludeObjectSchema as dictPriceTypeIncludeObjectSchema } from './objects/dictPriceTypeInclude.schema';
import { dictPriceTypeOrderByWithRelationInputObjectSchema as dictPriceTypeOrderByWithRelationInputObjectSchema } from './objects/dictPriceTypeOrderByWithRelationInput.schema';
import { dictPriceTypeWhereInputObjectSchema as dictPriceTypeWhereInputObjectSchema } from './objects/dictPriceTypeWhereInput.schema';
import { dictPriceTypeWhereUniqueInputObjectSchema as dictPriceTypeWhereUniqueInputObjectSchema } from './objects/dictPriceTypeWhereUniqueInput.schema';
import { DictPriceTypeScalarFieldEnumSchema } from './enums/DictPriceTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictPriceTypeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictPriceTypeSelect> = z.object({
    PriceTypeID: z.boolean().optional(),
    PriceTypeDesc: z.boolean().optional(),
    PriceTypePL: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictPriceTypeSelect>;

export const dictPriceTypeFindFirstOrThrowSelectZodSchema = z.object({
    PriceTypeID: z.boolean().optional(),
    PriceTypeDesc: z.boolean().optional(),
    PriceTypePL: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictPriceTypeFindFirstOrThrowSchema: z.ZodType<Prisma.dictPriceTypeFindFirstOrThrowArgs> = z.object({ select: dictPriceTypeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictPriceTypeIncludeObjectSchema.optional()), orderBy: z.union([dictPriceTypeOrderByWithRelationInputObjectSchema, dictPriceTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictPriceTypeWhereInputObjectSchema.optional(), cursor: dictPriceTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictPriceTypeScalarFieldEnumSchema, DictPriceTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictPriceTypeFindFirstOrThrowArgs>;

export const dictPriceTypeFindFirstOrThrowZodSchema = z.object({ select: dictPriceTypeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictPriceTypeIncludeObjectSchema.optional()), orderBy: z.union([dictPriceTypeOrderByWithRelationInputObjectSchema, dictPriceTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictPriceTypeWhereInputObjectSchema.optional(), cursor: dictPriceTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictPriceTypeScalarFieldEnumSchema, DictPriceTypeScalarFieldEnumSchema.array()]).optional() }).strict();