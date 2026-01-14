import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesIncludeObjectSchema as tblRoyRatesIncludeObjectSchema } from './objects/tblRoyRatesInclude.schema';
import { tblRoyRatesOrderByWithRelationInputObjectSchema as tblRoyRatesOrderByWithRelationInputObjectSchema } from './objects/tblRoyRatesOrderByWithRelationInput.schema';
import { tblRoyRatesWhereInputObjectSchema as tblRoyRatesWhereInputObjectSchema } from './objects/tblRoyRatesWhereInput.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './objects/tblRoyRatesWhereUniqueInput.schema';
import { TblRoyRatesScalarFieldEnumSchema } from './enums/TblRoyRatesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblRoyRatesFindManySelectSchema: z.ZodType<Prisma.tblRoyRatesSelect> = z.object({
    Step: z.boolean().optional(),
    AgrRightID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    CpsMax: z.boolean().optional(),
    Rate: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    tblAgrRights: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesSelect>;

export const tblRoyRatesFindManySelectZodSchema = z.object({
    Step: z.boolean().optional(),
    AgrRightID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    CpsMax: z.boolean().optional(),
    Rate: z.boolean().optional(),
    tblAgreements: z.boolean().optional(),
    tblAgrRights: z.boolean().optional()
  }).strict();

export const tblRoyRatesFindManySchema: z.ZodType<Prisma.tblRoyRatesFindManyArgs> = z.object({ select: tblRoyRatesFindManySelectSchema.optional(), include: z.lazy(() => tblRoyRatesIncludeObjectSchema.optional()), orderBy: z.union([tblRoyRatesOrderByWithRelationInputObjectSchema, tblRoyRatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblRoyRatesWhereInputObjectSchema.optional(), cursor: tblRoyRatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblRoyRatesScalarFieldEnumSchema, TblRoyRatesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesFindManyArgs>;

export const tblRoyRatesFindManyZodSchema = z.object({ select: tblRoyRatesFindManySelectSchema.optional(), include: z.lazy(() => tblRoyRatesIncludeObjectSchema.optional()), orderBy: z.union([tblRoyRatesOrderByWithRelationInputObjectSchema, tblRoyRatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblRoyRatesWhereInputObjectSchema.optional(), cursor: tblRoyRatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblRoyRatesScalarFieldEnumSchema, TblRoyRatesScalarFieldEnumSchema.array()]).optional() }).strict();