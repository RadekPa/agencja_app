import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingListsIncludeObjectSchema as tblMailingListsIncludeObjectSchema } from './objects/tblMailingListsInclude.schema';
import { tblMailingListsOrderByWithRelationInputObjectSchema as tblMailingListsOrderByWithRelationInputObjectSchema } from './objects/tblMailingListsOrderByWithRelationInput.schema';
import { tblMailingListsWhereInputObjectSchema as tblMailingListsWhereInputObjectSchema } from './objects/tblMailingListsWhereInput.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './objects/tblMailingListsWhereUniqueInput.schema';
import { TblMailingListsScalarFieldEnumSchema } from './enums/TblMailingListsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblMailingListsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.tblMailingListsSelect> = z.object({
    ClassCode: z.boolean().optional(),
    SubClassCode: z.boolean().optional(),
    CustID: z.boolean().optional(),
    dictTitMainClass: z.boolean().optional(),
    dictTitSubClass: z.boolean().optional(),
    tblCustomers: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblMailingListsSelect>;

export const tblMailingListsFindFirstOrThrowSelectZodSchema = z.object({
    ClassCode: z.boolean().optional(),
    SubClassCode: z.boolean().optional(),
    CustID: z.boolean().optional(),
    dictTitMainClass: z.boolean().optional(),
    dictTitSubClass: z.boolean().optional(),
    tblCustomers: z.boolean().optional()
  }).strict();

export const tblMailingListsFindFirstOrThrowSchema: z.ZodType<Prisma.tblMailingListsFindFirstOrThrowArgs> = z.object({ select: tblMailingListsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblMailingListsIncludeObjectSchema.optional()), orderBy: z.union([tblMailingListsOrderByWithRelationInputObjectSchema, tblMailingListsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblMailingListsWhereInputObjectSchema.optional(), cursor: tblMailingListsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblMailingListsScalarFieldEnumSchema, TblMailingListsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblMailingListsFindFirstOrThrowArgs>;

export const tblMailingListsFindFirstOrThrowZodSchema = z.object({ select: tblMailingListsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => tblMailingListsIncludeObjectSchema.optional()), orderBy: z.union([tblMailingListsOrderByWithRelationInputObjectSchema, tblMailingListsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblMailingListsWhereInputObjectSchema.optional(), cursor: tblMailingListsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblMailingListsScalarFieldEnumSchema, TblMailingListsScalarFieldEnumSchema.array()]).optional() }).strict();