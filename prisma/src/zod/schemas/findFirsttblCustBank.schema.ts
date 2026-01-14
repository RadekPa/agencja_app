import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustBankIncludeObjectSchema as tblCustBankIncludeObjectSchema } from './objects/tblCustBankInclude.schema';
import { tblCustBankOrderByWithRelationInputObjectSchema as tblCustBankOrderByWithRelationInputObjectSchema } from './objects/tblCustBankOrderByWithRelationInput.schema';
import { tblCustBankWhereInputObjectSchema as tblCustBankWhereInputObjectSchema } from './objects/tblCustBankWhereInput.schema';
import { tblCustBankWhereUniqueInputObjectSchema as tblCustBankWhereUniqueInputObjectSchema } from './objects/tblCustBankWhereUniqueInput.schema';
import { TblCustBankScalarFieldEnumSchema } from './enums/TblCustBankScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tblCustBankFindFirstSelectSchema: z.ZodType<Prisma.tblCustBankSelect> = z.object({
    CustID: z.boolean().optional(),
    BankName: z.boolean().optional(),
    BankAddress: z.boolean().optional(),
    AccountNo: z.boolean().optional(),
    RoutingNo: z.boolean().optional(),
    AccountName: z.boolean().optional(),
    tblCustomers: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tblCustBankSelect>;

export const tblCustBankFindFirstSelectZodSchema = z.object({
    CustID: z.boolean().optional(),
    BankName: z.boolean().optional(),
    BankAddress: z.boolean().optional(),
    AccountNo: z.boolean().optional(),
    RoutingNo: z.boolean().optional(),
    AccountName: z.boolean().optional(),
    tblCustomers: z.boolean().optional()
  }).strict();

export const tblCustBankFindFirstSchema: z.ZodType<Prisma.tblCustBankFindFirstArgs> = z.object({ select: tblCustBankFindFirstSelectSchema.optional(), include: z.lazy(() => tblCustBankIncludeObjectSchema.optional()), orderBy: z.union([tblCustBankOrderByWithRelationInputObjectSchema, tblCustBankOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustBankWhereInputObjectSchema.optional(), cursor: tblCustBankWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustBankScalarFieldEnumSchema, TblCustBankScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustBankFindFirstArgs>;

export const tblCustBankFindFirstZodSchema = z.object({ select: tblCustBankFindFirstSelectSchema.optional(), include: z.lazy(() => tblCustBankIncludeObjectSchema.optional()), orderBy: z.union([tblCustBankOrderByWithRelationInputObjectSchema, tblCustBankOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustBankWhereInputObjectSchema.optional(), cursor: tblCustBankWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TblCustBankScalarFieldEnumSchema, TblCustBankScalarFieldEnumSchema.array()]).optional() }).strict();