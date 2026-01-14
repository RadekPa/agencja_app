import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyAccountIntervalIncludeObjectSchema as dictRoyAccountIntervalIncludeObjectSchema } from './objects/dictRoyAccountIntervalInclude.schema';
import { dictRoyAccountIntervalOrderByWithRelationInputObjectSchema as dictRoyAccountIntervalOrderByWithRelationInputObjectSchema } from './objects/dictRoyAccountIntervalOrderByWithRelationInput.schema';
import { dictRoyAccountIntervalWhereInputObjectSchema as dictRoyAccountIntervalWhereInputObjectSchema } from './objects/dictRoyAccountIntervalWhereInput.schema';
import { dictRoyAccountIntervalWhereUniqueInputObjectSchema as dictRoyAccountIntervalWhereUniqueInputObjectSchema } from './objects/dictRoyAccountIntervalWhereUniqueInput.schema';
import { DictRoyAccountIntervalScalarFieldEnumSchema } from './enums/DictRoyAccountIntervalScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictRoyAccountIntervalFindManySelectSchema: z.ZodType<Prisma.dictRoyAccountIntervalSelect> = z.object({
    RoyAccountIntervalID: z.boolean().optional(),
    RoyAccountIntervalDesc: z.boolean().optional(),
    IntervalAbb: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalSelect>;

export const dictRoyAccountIntervalFindManySelectZodSchema = z.object({
    RoyAccountIntervalID: z.boolean().optional(),
    RoyAccountIntervalDesc: z.boolean().optional(),
    IntervalAbb: z.boolean().optional(),
    tblAgrRights: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictRoyAccountIntervalFindManySchema: z.ZodType<Prisma.dictRoyAccountIntervalFindManyArgs> = z.object({ select: dictRoyAccountIntervalFindManySelectSchema.optional(), include: z.lazy(() => dictRoyAccountIntervalIncludeObjectSchema.optional()), orderBy: z.union([dictRoyAccountIntervalOrderByWithRelationInputObjectSchema, dictRoyAccountIntervalOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyAccountIntervalWhereInputObjectSchema.optional(), cursor: dictRoyAccountIntervalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRoyAccountIntervalScalarFieldEnumSchema, DictRoyAccountIntervalScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalFindManyArgs>;

export const dictRoyAccountIntervalFindManyZodSchema = z.object({ select: dictRoyAccountIntervalFindManySelectSchema.optional(), include: z.lazy(() => dictRoyAccountIntervalIncludeObjectSchema.optional()), orderBy: z.union([dictRoyAccountIntervalOrderByWithRelationInputObjectSchema, dictRoyAccountIntervalOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyAccountIntervalWhereInputObjectSchema.optional(), cursor: dictRoyAccountIntervalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictRoyAccountIntervalScalarFieldEnumSchema, DictRoyAccountIntervalScalarFieldEnumSchema.array()]).optional() }).strict();