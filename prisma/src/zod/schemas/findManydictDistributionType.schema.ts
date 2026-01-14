import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictDistributionTypeIncludeObjectSchema as dictDistributionTypeIncludeObjectSchema } from './objects/dictDistributionTypeInclude.schema';
import { dictDistributionTypeOrderByWithRelationInputObjectSchema as dictDistributionTypeOrderByWithRelationInputObjectSchema } from './objects/dictDistributionTypeOrderByWithRelationInput.schema';
import { dictDistributionTypeWhereInputObjectSchema as dictDistributionTypeWhereInputObjectSchema } from './objects/dictDistributionTypeWhereInput.schema';
import { dictDistributionTypeWhereUniqueInputObjectSchema as dictDistributionTypeWhereUniqueInputObjectSchema } from './objects/dictDistributionTypeWhereUniqueInput.schema';
import { DictDistributionTypeScalarFieldEnumSchema } from './enums/DictDistributionTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictDistributionTypeFindManySelectSchema: z.ZodType<Prisma.dictDistributionTypeSelect> = z.object({
    DistID: z.boolean().optional(),
    DistDesc: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictDistributionTypeSelect>;

export const dictDistributionTypeFindManySelectZodSchema = z.object({
    DistID: z.boolean().optional(),
    DistDesc: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictDistributionTypeFindManySchema: z.ZodType<Prisma.dictDistributionTypeFindManyArgs> = z.object({ select: dictDistributionTypeFindManySelectSchema.optional(), include: z.lazy(() => dictDistributionTypeIncludeObjectSchema.optional()), orderBy: z.union([dictDistributionTypeOrderByWithRelationInputObjectSchema, dictDistributionTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictDistributionTypeWhereInputObjectSchema.optional(), cursor: dictDistributionTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictDistributionTypeScalarFieldEnumSchema, DictDistributionTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictDistributionTypeFindManyArgs>;

export const dictDistributionTypeFindManyZodSchema = z.object({ select: dictDistributionTypeFindManySelectSchema.optional(), include: z.lazy(() => dictDistributionTypeIncludeObjectSchema.optional()), orderBy: z.union([dictDistributionTypeOrderByWithRelationInputObjectSchema, dictDistributionTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictDistributionTypeWhereInputObjectSchema.optional(), cursor: dictDistributionTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictDistributionTypeScalarFieldEnumSchema, DictDistributionTypeScalarFieldEnumSchema.array()]).optional() }).strict();