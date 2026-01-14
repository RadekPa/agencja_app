import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAdvanceIncludeObjectSchema as tblAdvanceIncludeObjectSchema } from './objects/tblAdvanceInclude.schema';
import { tblAdvanceOrderByWithRelationInputObjectSchema as tblAdvanceOrderByWithRelationInputObjectSchema } from './objects/tblAdvanceOrderByWithRelationInput.schema';
import { tblAdvanceWhereInputObjectSchema as tblAdvanceWhereInputObjectSchema } from './objects/tblAdvanceWhereInput.schema';
import { tblAdvanceWhereUniqueInputObjectSchema as tblAdvanceWhereUniqueInputObjectSchema } from './objects/tblAdvanceWhereUniqueInput.schema';
import { TblAdvanceScalarFieldEnumSchema } from './enums/TblAdvanceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblAdvanceFindManySelectSchema: z.ZodType<Prisma.tblAdvanceSelect> = z.object({
    AdvID: z.boolean().optional(),
    Inst: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    AdvTermId: z.boolean().optional(),
    AdvTypeId: z.boolean().optional(),
    Amount: z.boolean().optional(),
    AdvTermDate: z.boolean().optional(),
    RoyID: z.boolean().optional(),
    tblAgreements: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblAdvanceSelect>;

export const tblAdvanceFindManySelectZodSchema = z.object({
    AdvID: z.boolean().optional(),
    Inst: z.boolean().optional(),
    AgrID: z.boolean().optional(),
    AdvTermId: z.boolean().optional(),
    AdvTypeId: z.boolean().optional(),
    Amount: z.boolean().optional(),
    AdvTermDate: z.boolean().optional(),
    RoyID: z.boolean().optional(),
    tblAgreements: z.boolean().optional()
  }).strict();

export const tblAdvanceFindManySchema: z.ZodType<Prisma.tblAdvanceFindManyArgs> = z.object({ select: tblAdvanceFindManySelectSchema.optional(), include: z.lazy(() => tblAdvanceIncludeObjectSchema.optional()), orderBy: z.union([tblAdvanceOrderByWithRelationInputObjectSchema, tblAdvanceOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAdvanceWhereInputObjectSchema.optional(), cursor: tblAdvanceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblAdvanceScalarFieldEnumSchema, TblAdvanceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblAdvanceFindManyArgs>;

export const tblAdvanceFindManyZodSchema = z.object({ select: tblAdvanceFindManySelectSchema.optional(), include: z.lazy(() => tblAdvanceIncludeObjectSchema.optional()), orderBy: z.union([tblAdvanceOrderByWithRelationInputObjectSchema, tblAdvanceOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAdvanceWhereInputObjectSchema.optional(), cursor: tblAdvanceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblAdvanceScalarFieldEnumSchema, TblAdvanceScalarFieldEnumSchema.array()]).optional() }).strict();