import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCustTypesIncludeObjectSchema as dictCustTypesIncludeObjectSchema } from './objects/dictCustTypesInclude.schema';
import { dictCustTypesOrderByWithRelationInputObjectSchema as dictCustTypesOrderByWithRelationInputObjectSchema } from './objects/dictCustTypesOrderByWithRelationInput.schema';
import { dictCustTypesWhereInputObjectSchema as dictCustTypesWhereInputObjectSchema } from './objects/dictCustTypesWhereInput.schema';
import { dictCustTypesWhereUniqueInputObjectSchema as dictCustTypesWhereUniqueInputObjectSchema } from './objects/dictCustTypesWhereUniqueInput.schema';
import { DictCustTypesScalarFieldEnumSchema } from './enums/DictCustTypesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictCustTypesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictCustTypesSelect> = z.object({
    CustTypeID: z.boolean().optional(),
    CustTypeName: z.boolean().optional(),
    CustTypeDesc: z.boolean().optional(),
    tblCustTypes: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictCustTypesSelect>;

export const dictCustTypesFindFirstOrThrowSelectZodSchema = z.object({
    CustTypeID: z.boolean().optional(),
    CustTypeName: z.boolean().optional(),
    CustTypeDesc: z.boolean().optional(),
    tblCustTypes: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const dictCustTypesFindFirstOrThrowSchema: z.ZodType<Prisma.dictCustTypesFindFirstOrThrowArgs> = z.object({ select: dictCustTypesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictCustTypesIncludeObjectSchema.optional()), orderBy: z.union([dictCustTypesOrderByWithRelationInputObjectSchema, dictCustTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCustTypesWhereInputObjectSchema.optional(), cursor: dictCustTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCustTypesScalarFieldEnumSchema, DictCustTypesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCustTypesFindFirstOrThrowArgs>;

export const dictCustTypesFindFirstOrThrowZodSchema = z.object({ select: dictCustTypesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictCustTypesIncludeObjectSchema.optional()), orderBy: z.union([dictCustTypesOrderByWithRelationInputObjectSchema, dictCustTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCustTypesWhereInputObjectSchema.optional(), cursor: dictCustTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictCustTypesScalarFieldEnumSchema, DictCustTypesScalarFieldEnumSchema.array()]).optional() }).strict();