import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustTypesIncludeObjectSchema as tblCustTypesIncludeObjectSchema } from './objects/tblCustTypesInclude.schema';
import { tblCustTypesOrderByWithRelationInputObjectSchema as tblCustTypesOrderByWithRelationInputObjectSchema } from './objects/tblCustTypesOrderByWithRelationInput.schema';
import { tblCustTypesWhereInputObjectSchema as tblCustTypesWhereInputObjectSchema } from './objects/tblCustTypesWhereInput.schema';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './objects/tblCustTypesWhereUniqueInput.schema';
import { TblCustTypesScalarFieldEnumSchema } from './enums/TblCustTypesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblCustTypesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblCustTypesSelect> = z.object({
    CustID: z.boolean().optional(),
    CustTypeID: z.boolean().optional(),
    dictCustTypes: z.boolean().optional(),
    tblCustomers: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblCustTypesSelect>;

export const tblCustTypesFindFirstOrThrowSelectZodSchema = z.object({
    CustID: z.boolean().optional(),
    CustTypeID: z.boolean().optional(),
    dictCustTypes: z.boolean().optional(),
    tblCustomers: z.boolean().optional()
  }).strict();

export const tblCustTypesFindFirstOrThrowSchema: z.ZodType<Prisma.tblCustTypesFindFirstOrThrowArgs> = z.object({ select: tblCustTypesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblCustTypesIncludeObjectSchema.optional()), orderBy: z.union([tblCustTypesOrderByWithRelationInputObjectSchema, tblCustTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustTypesWhereInputObjectSchema.optional(), cursor: tblCustTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustTypesScalarFieldEnumSchema, TblCustTypesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustTypesFindFirstOrThrowArgs>;

export const tblCustTypesFindFirstOrThrowZodSchema = z.object({ select: tblCustTypesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblCustTypesIncludeObjectSchema.optional()), orderBy: z.union([tblCustTypesOrderByWithRelationInputObjectSchema, tblCustTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustTypesWhereInputObjectSchema.optional(), cursor: tblCustTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustTypesScalarFieldEnumSchema, TblCustTypesScalarFieldEnumSchema.array()]).optional() }).strict();