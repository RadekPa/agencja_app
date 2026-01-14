import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustTypesIncludeObjectSchema as tblCustTypesIncludeObjectSchema } from './objects/tblCustTypesInclude.schema';
import { tblCustTypesOrderByWithRelationInputObjectSchema as tblCustTypesOrderByWithRelationInputObjectSchema } from './objects/tblCustTypesOrderByWithRelationInput.schema';
import { tblCustTypesWhereInputObjectSchema as tblCustTypesWhereInputObjectSchema } from './objects/tblCustTypesWhereInput.schema';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './objects/tblCustTypesWhereUniqueInput.schema';
import { TblCustTypesScalarFieldEnumSchema } from './enums/TblCustTypesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblCustTypesFindFirstSelectSchema: z.ZodType<Prisma.tblCustTypesSelect> = z.object({
    CustID: z.boolean().optional(),
    CustTypeID: z.boolean().optional(),
    dictCustTypes: z.boolean().optional(),
    tblCustomers: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblCustTypesSelect>;

export const tblCustTypesFindFirstSelectZodSchema = z.object({
    CustID: z.boolean().optional(),
    CustTypeID: z.boolean().optional(),
    dictCustTypes: z.boolean().optional(),
    tblCustomers: z.boolean().optional()
  }).strict();

export const tblCustTypesFindFirstSchema: z.ZodType<Prisma.tblCustTypesFindFirstArgs> = z.object({ select: tblCustTypesFindFirstSelectSchema.optional(), include: z.lazy(() => tblCustTypesIncludeObjectSchema.optional()), orderBy: z.union([tblCustTypesOrderByWithRelationInputObjectSchema, tblCustTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustTypesWhereInputObjectSchema.optional(), cursor: tblCustTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustTypesScalarFieldEnumSchema, TblCustTypesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustTypesFindFirstArgs>;

export const tblCustTypesFindFirstZodSchema = z.object({ select: tblCustTypesFindFirstSelectSchema.optional(), include: z.lazy(() => tblCustTypesIncludeObjectSchema.optional()), orderBy: z.union([tblCustTypesOrderByWithRelationInputObjectSchema, tblCustTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustTypesWhereInputObjectSchema.optional(), cursor: tblCustTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustTypesScalarFieldEnumSchema, TblCustTypesScalarFieldEnumSchema.array()]).optional() }).strict();