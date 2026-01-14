import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyaltyIncludeObjectSchema as tblRoyaltyIncludeObjectSchema } from './objects/tblRoyaltyInclude.schema';
import { tblRoyaltyOrderByWithRelationInputObjectSchema as tblRoyaltyOrderByWithRelationInputObjectSchema } from './objects/tblRoyaltyOrderByWithRelationInput.schema';
import { tblRoyaltyWhereInputObjectSchema as tblRoyaltyWhereInputObjectSchema } from './objects/tblRoyaltyWhereInput.schema';
import { tblRoyaltyWhereUniqueInputObjectSchema as tblRoyaltyWhereUniqueInputObjectSchema } from './objects/tblRoyaltyWhereUniqueInput.schema';
import { TblRoyaltyScalarFieldEnumSchema } from './enums/TblRoyaltyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblRoyaltyFindManySelectSchema: z.ZodType<Prisma.tblRoyaltySelect> = z.object({
    RoyID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    AgrRightID: z.boolean().optional(),
    RoyNr: z.boolean().optional(),
    EnterDate: z.boolean().optional(),
    RoyDate: z.boolean().optional(),
    Copies: z.boolean().optional(),
    Price: z.boolean().optional(),
    RoyRate: z.boolean().optional(),
    XRate: z.boolean().optional(),
    ThisRoy: z.boolean().optional(),
    AdvLeft: z.boolean().optional(),
    RoyDue: z.boolean().optional(),
    Pay: z.boolean().optional(),
    AdvID: z.boolean().optional(),
    tblAgreements: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblRoyaltySelect>;

export const tblRoyaltyFindManySelectZodSchema = z.object({
    RoyID: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    AgrRightID: z.boolean().optional(),
    RoyNr: z.boolean().optional(),
    EnterDate: z.boolean().optional(),
    RoyDate: z.boolean().optional(),
    Copies: z.boolean().optional(),
    Price: z.boolean().optional(),
    RoyRate: z.boolean().optional(),
    XRate: z.boolean().optional(),
    ThisRoy: z.boolean().optional(),
    AdvLeft: z.boolean().optional(),
    RoyDue: z.boolean().optional(),
    Pay: z.boolean().optional(),
    AdvID: z.boolean().optional(),
    tblAgreements: z.boolean().optional()
  }).strict();

export const tblRoyaltyFindManySchema: z.ZodType<Prisma.tblRoyaltyFindManyArgs> = z.object({ select: tblRoyaltyFindManySelectSchema.optional(), include: z.lazy(() => tblRoyaltyIncludeObjectSchema.optional()), orderBy: z.union([tblRoyaltyOrderByWithRelationInputObjectSchema, tblRoyaltyOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblRoyaltyWhereInputObjectSchema.optional(), cursor: tblRoyaltyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblRoyaltyScalarFieldEnumSchema, TblRoyaltyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblRoyaltyFindManyArgs>;

export const tblRoyaltyFindManyZodSchema = z.object({ select: tblRoyaltyFindManySelectSchema.optional(), include: z.lazy(() => tblRoyaltyIncludeObjectSchema.optional()), orderBy: z.union([tblRoyaltyOrderByWithRelationInputObjectSchema, tblRoyaltyOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblRoyaltyWhereInputObjectSchema.optional(), cursor: tblRoyaltyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblRoyaltyScalarFieldEnumSchema, TblRoyaltyScalarFieldEnumSchema.array()]).optional() }).strict();