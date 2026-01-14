import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArApplyIncludeObjectSchema as ArApplyIncludeObjectSchema } from './objects/ArApplyInclude.schema';
import { ArApplyOrderByWithRelationInputObjectSchema as ArApplyOrderByWithRelationInputObjectSchema } from './objects/ArApplyOrderByWithRelationInput.schema';
import { ArApplyWhereInputObjectSchema as ArApplyWhereInputObjectSchema } from './objects/ArApplyWhereInput.schema';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './objects/ArApplyWhereUniqueInput.schema';
import { ArApplyScalarFieldEnumSchema } from './enums/ArApplyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArApplyFindManySelectSchema: z.ZodType<Prisma.ArApplySelect> = z.object({
    ApplyID: z.boolean().optional(),
    DebitID: z.boolean().optional(),
    CreditID: z.boolean().optional(),
    TaxPerc: z.boolean().optional(),
    TaxAmt: z.boolean().optional(),
    AmtApplied: z.boolean().optional(),
    GraalPerc: z.boolean().optional(),
    GraalAmt: z.boolean().optional(),
    Notes: z.boolean().optional(),
    ApplyDate: z.boolean().optional(),
    TaxSet: z.boolean().optional(),
    ArTransaction: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArApplySelect>;

export const ArApplyFindManySelectZodSchema = z.object({
    ApplyID: z.boolean().optional(),
    DebitID: z.boolean().optional(),
    CreditID: z.boolean().optional(),
    TaxPerc: z.boolean().optional(),
    TaxAmt: z.boolean().optional(),
    AmtApplied: z.boolean().optional(),
    GraalPerc: z.boolean().optional(),
    GraalAmt: z.boolean().optional(),
    Notes: z.boolean().optional(),
    ApplyDate: z.boolean().optional(),
    TaxSet: z.boolean().optional(),
    ArTransaction: z.boolean().optional()
  }).strict();

export const ArApplyFindManySchema: z.ZodType<Prisma.ArApplyFindManyArgs> = z.object({ select: ArApplyFindManySelectSchema.optional(), include: z.lazy(() => ArApplyIncludeObjectSchema.optional()), orderBy: z.union([ArApplyOrderByWithRelationInputObjectSchema, ArApplyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArApplyWhereInputObjectSchema.optional(), cursor: ArApplyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArApplyScalarFieldEnumSchema, ArApplyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArApplyFindManyArgs>;

export const ArApplyFindManyZodSchema = z.object({ select: ArApplyFindManySelectSchema.optional(), include: z.lazy(() => ArApplyIncludeObjectSchema.optional()), orderBy: z.union([ArApplyOrderByWithRelationInputObjectSchema, ArApplyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArApplyWhereInputObjectSchema.optional(), cursor: ArApplyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArApplyScalarFieldEnumSchema, ArApplyScalarFieldEnumSchema.array()]).optional() }).strict();