import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArDefaultAccountOrderByWithRelationInputObjectSchema as ArDefaultAccountOrderByWithRelationInputObjectSchema } from './objects/ArDefaultAccountOrderByWithRelationInput.schema';
import { ArDefaultAccountWhereInputObjectSchema as ArDefaultAccountWhereInputObjectSchema } from './objects/ArDefaultAccountWhereInput.schema';
import { ArDefaultAccountWhereUniqueInputObjectSchema as ArDefaultAccountWhereUniqueInputObjectSchema } from './objects/ArDefaultAccountWhereUniqueInput.schema';
import { ArDefaultAccountScalarFieldEnumSchema } from './enums/ArDefaultAccountScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArDefaultAccountFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ArDefaultAccountSelect> = z.object({
    TransactionType: z.boolean().optional(),
    DefaultDebitAccount: z.boolean().optional(),
    DefaultCreditAccount: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountSelect>;

export const ArDefaultAccountFindFirstOrThrowSelectZodSchema = z.object({
    TransactionType: z.boolean().optional(),
    DefaultDebitAccount: z.boolean().optional(),
    DefaultCreditAccount: z.boolean().optional()
  }).strict();

export const ArDefaultAccountFindFirstOrThrowSchema: z.ZodType<Prisma.ArDefaultAccountFindFirstOrThrowArgs> = z.object({ select: ArDefaultAccountFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([ArDefaultAccountOrderByWithRelationInputObjectSchema, ArDefaultAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArDefaultAccountWhereInputObjectSchema.optional(), cursor: ArDefaultAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArDefaultAccountScalarFieldEnumSchema, ArDefaultAccountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountFindFirstOrThrowArgs>;

export const ArDefaultAccountFindFirstOrThrowZodSchema = z.object({ select: ArDefaultAccountFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([ArDefaultAccountOrderByWithRelationInputObjectSchema, ArDefaultAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArDefaultAccountWhereInputObjectSchema.optional(), cursor: ArDefaultAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArDefaultAccountScalarFieldEnumSchema, ArDefaultAccountScalarFieldEnumSchema.array()]).optional() }).strict();