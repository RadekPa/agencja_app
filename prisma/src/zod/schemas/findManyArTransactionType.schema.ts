import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeOrderByWithRelationInputObjectSchema as ArTransactionTypeOrderByWithRelationInputObjectSchema } from './objects/ArTransactionTypeOrderByWithRelationInput.schema';
import { ArTransactionTypeWhereInputObjectSchema as ArTransactionTypeWhereInputObjectSchema } from './objects/ArTransactionTypeWhereInput.schema';
import { ArTransactionTypeWhereUniqueInputObjectSchema as ArTransactionTypeWhereUniqueInputObjectSchema } from './objects/ArTransactionTypeWhereUniqueInput.schema';
import { ArTransactionTypeScalarFieldEnumSchema } from './enums/ArTransactionTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArTransactionTypeFindManySelectSchema: z.ZodType<Prisma.ArTransactionTypeSelect> = z.object({
    ArType: z.boolean().optional(),
    ArTypeDescription: z.boolean().optional(),
    ArTypeDescriptionPL: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeSelect>;

export const ArTransactionTypeFindManySelectZodSchema = z.object({
    ArType: z.boolean().optional(),
    ArTypeDescription: z.boolean().optional(),
    ArTypeDescriptionPL: z.boolean().optional()
  }).strict();

export const ArTransactionTypeFindManySchema: z.ZodType<Prisma.ArTransactionTypeFindManyArgs> = z.object({ select: ArTransactionTypeFindManySelectSchema.optional(),  orderBy: z.union([ArTransactionTypeOrderByWithRelationInputObjectSchema, ArTransactionTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransactionTypeWhereInputObjectSchema.optional(), cursor: ArTransactionTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTransactionTypeScalarFieldEnumSchema, ArTransactionTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeFindManyArgs>;

export const ArTransactionTypeFindManyZodSchema = z.object({ select: ArTransactionTypeFindManySelectSchema.optional(),  orderBy: z.union([ArTransactionTypeOrderByWithRelationInputObjectSchema, ArTransactionTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransactionTypeWhereInputObjectSchema.optional(), cursor: ArTransactionTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTransactionTypeScalarFieldEnumSchema, ArTransactionTypeScalarFieldEnumSchema.array()]).optional() }).strict();