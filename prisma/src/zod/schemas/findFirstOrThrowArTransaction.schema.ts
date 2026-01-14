import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionIncludeObjectSchema as ArTransactionIncludeObjectSchema } from './objects/ArTransactionInclude.schema';
import { ArTransactionOrderByWithRelationInputObjectSchema as ArTransactionOrderByWithRelationInputObjectSchema } from './objects/ArTransactionOrderByWithRelationInput.schema';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './objects/ArTransactionWhereInput.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './objects/ArTransactionWhereUniqueInput.schema';
import { ArTransactionScalarFieldEnumSchema } from './enums/ArTransactionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArTransactionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ArTransactionSelect> = z.object({
    TransactionID: z.boolean().optional(),
    DefaultDocRef: z.boolean().optional(),
    InvNr: z.boolean().optional(),
    TransactionDate: z.boolean().optional(),
    TransactionType: z.boolean().optional(),
    Currency: z.boolean().optional(),
    TransactionAmt: z.boolean().optional(),
    RCustID: z.boolean().optional(),
    PCustID: z.boolean().optional(),
    RBalance: z.boolean().optional(),
    PBalance: z.boolean().optional(),
    IFTBalance: z.boolean().optional(),
    GraalBalance: z.boolean().optional(),
    ClientReference: z.boolean().optional(),
    OurBankTransRef: z.boolean().optional(),
    NetDate: z.boolean().optional(),
    IsChargeInterest: z.boolean().optional(),
    Notes: z.boolean().optional(),
    ReversalTransID: z.boolean().optional(),
    OriginTransID: z.boolean().optional(),
    EntryDate: z.boolean().optional(),
    OriginUserID: z.boolean().optional(),
    ErrorID: z.boolean().optional(),
    Status: z.boolean().optional(),
    CreditID: z.boolean().optional(),
    ApplyID: z.boolean().optional(),
    TaxCode: z.boolean().optional(),
    TaxValue: z.boolean().optional(),
    ArApply: z.boolean().optional(),
    ArTransactionDetail: z.boolean().optional(),
    ArTransferDetail: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArTransactionSelect>;

export const ArTransactionFindFirstOrThrowSelectZodSchema = z.object({
    TransactionID: z.boolean().optional(),
    DefaultDocRef: z.boolean().optional(),
    InvNr: z.boolean().optional(),
    TransactionDate: z.boolean().optional(),
    TransactionType: z.boolean().optional(),
    Currency: z.boolean().optional(),
    TransactionAmt: z.boolean().optional(),
    RCustID: z.boolean().optional(),
    PCustID: z.boolean().optional(),
    RBalance: z.boolean().optional(),
    PBalance: z.boolean().optional(),
    IFTBalance: z.boolean().optional(),
    GraalBalance: z.boolean().optional(),
    ClientReference: z.boolean().optional(),
    OurBankTransRef: z.boolean().optional(),
    NetDate: z.boolean().optional(),
    IsChargeInterest: z.boolean().optional(),
    Notes: z.boolean().optional(),
    ReversalTransID: z.boolean().optional(),
    OriginTransID: z.boolean().optional(),
    EntryDate: z.boolean().optional(),
    OriginUserID: z.boolean().optional(),
    ErrorID: z.boolean().optional(),
    Status: z.boolean().optional(),
    CreditID: z.boolean().optional(),
    ApplyID: z.boolean().optional(),
    TaxCode: z.boolean().optional(),
    TaxValue: z.boolean().optional(),
    ArApply: z.boolean().optional(),
    ArTransactionDetail: z.boolean().optional(),
    ArTransferDetail: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ArTransactionFindFirstOrThrowSchema: z.ZodType<Prisma.ArTransactionFindFirstOrThrowArgs> = z.object({ select: ArTransactionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ArTransactionIncludeObjectSchema.optional()), orderBy: z.union([ArTransactionOrderByWithRelationInputObjectSchema, ArTransactionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransactionWhereInputObjectSchema.optional(), cursor: ArTransactionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTransactionScalarFieldEnumSchema, ArTransactionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionFindFirstOrThrowArgs>;

export const ArTransactionFindFirstOrThrowZodSchema = z.object({ select: ArTransactionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ArTransactionIncludeObjectSchema.optional()), orderBy: z.union([ArTransactionOrderByWithRelationInputObjectSchema, ArTransactionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransactionWhereInputObjectSchema.optional(), cursor: ArTransactionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTransactionScalarFieldEnumSchema, ArTransactionScalarFieldEnumSchema.array()]).optional() }).strict();