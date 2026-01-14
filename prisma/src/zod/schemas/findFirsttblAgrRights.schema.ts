import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrRightsIncludeObjectSchema as tblAgrRightsIncludeObjectSchema } from './objects/tblAgrRightsInclude.schema';
import { tblAgrRightsOrderByWithRelationInputObjectSchema as tblAgrRightsOrderByWithRelationInputObjectSchema } from './objects/tblAgrRightsOrderByWithRelationInput.schema';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './objects/tblAgrRightsWhereInput.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './objects/tblAgrRightsWhereUniqueInput.schema';
import { TblAgrRightsScalarFieldEnumSchema } from './enums/TblAgrRightsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblAgrRightsFindFirstSelectSchema: z.ZodType<Prisma.tblAgrRightsSelect> = z.object({
    AgrRightID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    RightID: z.boolean().optional(),
    PriceTypeID: z.boolean().optional(),
    RoyPriceTypeID: z.boolean().optional(),
    RoyAccountIntervalID: z.boolean().optional(),
    DistID: z.boolean().optional(),
    dictRoyType: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    dictDistributionType: z.boolean().optional(),
    dictRightsForm: z.boolean().optional(),
    dictRoyPriceType: z.boolean().optional(),
    dictPriceType: z.boolean().optional(),
    dictRoyAccountInterval: z.boolean().optional(),
    tblRoyRates: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsSelect>;

export const tblAgrRightsFindFirstSelectZodSchema = z.object({
    AgrRightID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    RightID: z.boolean().optional(),
    PriceTypeID: z.boolean().optional(),
    RoyPriceTypeID: z.boolean().optional(),
    RoyAccountIntervalID: z.boolean().optional(),
    DistID: z.boolean().optional(),
    dictRoyType: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    dictDistributionType: z.boolean().optional(),
    dictRightsForm: z.boolean().optional(),
    dictRoyPriceType: z.boolean().optional(),
    dictPriceType: z.boolean().optional(),
    dictRoyAccountInterval: z.boolean().optional(),
    tblRoyRates: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tblAgrRightsFindFirstSchema: z.ZodType<Prisma.tblAgrRightsFindFirstArgs> = z.object({ select: tblAgrRightsFindFirstSelectSchema.optional(), include: z.lazy(() => tblAgrRightsIncludeObjectSchema.optional()), orderBy: z.union([tblAgrRightsOrderByWithRelationInputObjectSchema, tblAgrRightsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgrRightsWhereInputObjectSchema.optional(), cursor: tblAgrRightsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblAgrRightsScalarFieldEnumSchema, TblAgrRightsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsFindFirstArgs>;

export const tblAgrRightsFindFirstZodSchema = z.object({ select: tblAgrRightsFindFirstSelectSchema.optional(), include: z.lazy(() => tblAgrRightsIncludeObjectSchema.optional()), orderBy: z.union([tblAgrRightsOrderByWithRelationInputObjectSchema, tblAgrRightsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgrRightsWhereInputObjectSchema.optional(), cursor: tblAgrRightsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblAgrRightsScalarFieldEnumSchema, TblAgrRightsScalarFieldEnumSchema.array()]).optional() }).strict();