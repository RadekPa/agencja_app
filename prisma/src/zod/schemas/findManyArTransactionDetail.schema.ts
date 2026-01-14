import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionDetailIncludeObjectSchema as ArTransactionDetailIncludeObjectSchema } from './objects/ArTransactionDetailInclude.schema';
import { ArTransactionDetailOrderByWithRelationInputObjectSchema as ArTransactionDetailOrderByWithRelationInputObjectSchema } from './objects/ArTransactionDetailOrderByWithRelationInput.schema';
import { ArTransactionDetailWhereInputObjectSchema as ArTransactionDetailWhereInputObjectSchema } from './objects/ArTransactionDetailWhereInput.schema';
import { ArTransactionDetailWhereUniqueInputObjectSchema as ArTransactionDetailWhereUniqueInputObjectSchema } from './objects/ArTransactionDetailWhereUniqueInput.schema';
import { ArTransactionDetailScalarFieldEnumSchema } from './enums/ArTransactionDetailScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArTransactionDetailFindManySelectSchema: z.ZodType<Prisma.ArTransactionDetailSelect> = z.object({
    ItemID: z.boolean().optional(),
    TransactionID: z.boolean().optional(),
    AccountID: z.boolean().optional(),
    Amount: z.boolean().optional(),
    ArTransaction: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArTransactionDetailSelect>;

export const ArTransactionDetailFindManySelectZodSchema = z.object({
    ItemID: z.boolean().optional(),
    TransactionID: z.boolean().optional(),
    AccountID: z.boolean().optional(),
    Amount: z.boolean().optional(),
    ArTransaction: z.boolean().optional()
  }).strict();

export const ArTransactionDetailFindManySchema: z.ZodType<Prisma.ArTransactionDetailFindManyArgs> = z.object({ select: ArTransactionDetailFindManySelectSchema.optional(), include: z.lazy(() => ArTransactionDetailIncludeObjectSchema.optional()), orderBy: z.union([ArTransactionDetailOrderByWithRelationInputObjectSchema, ArTransactionDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransactionDetailWhereInputObjectSchema.optional(), cursor: ArTransactionDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTransactionDetailScalarFieldEnumSchema, ArTransactionDetailScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionDetailFindManyArgs>;

export const ArTransactionDetailFindManyZodSchema = z.object({ select: ArTransactionDetailFindManySelectSchema.optional(), include: z.lazy(() => ArTransactionDetailIncludeObjectSchema.optional()), orderBy: z.union([ArTransactionDetailOrderByWithRelationInputObjectSchema, ArTransactionDetailOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransactionDetailWhereInputObjectSchema.optional(), cursor: ArTransactionDetailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTransactionDetailScalarFieldEnumSchema, ArTransactionDetailScalarFieldEnumSchema.array()]).optional() }).strict();