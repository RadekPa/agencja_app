import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeOrderByWithRelationInputObjectSchema as ArTransactionTypeOrderByWithRelationInputObjectSchema } from './objects/ArTransactionTypeOrderByWithRelationInput.schema';
import { ArTransactionTypeWhereInputObjectSchema as ArTransactionTypeWhereInputObjectSchema } from './objects/ArTransactionTypeWhereInput.schema';
import { ArTransactionTypeWhereUniqueInputObjectSchema as ArTransactionTypeWhereUniqueInputObjectSchema } from './objects/ArTransactionTypeWhereUniqueInput.schema';
import { ArTransactionTypeScalarFieldEnumSchema } from './enums/ArTransactionTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArTransactionTypeFindFirstSelectSchema: z.ZodType<Prisma.ArTransactionTypeSelect> = z.object({
    ArType: z.boolean().optional(),
    ArTypeDescription: z.boolean().optional(),
    ArTypeDescriptionPL: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeSelect>;

export const ArTransactionTypeFindFirstSelectZodSchema = z.object({
    ArType: z.boolean().optional(),
    ArTypeDescription: z.boolean().optional(),
    ArTypeDescriptionPL: z.boolean().optional()
  }).strict();

export const ArTransactionTypeFindFirstSchema: z.ZodType<Prisma.ArTransactionTypeFindFirstArgs> = z.object({ select: ArTransactionTypeFindFirstSelectSchema.optional(),  orderBy: z.union([ArTransactionTypeOrderByWithRelationInputObjectSchema, ArTransactionTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransactionTypeWhereInputObjectSchema.optional(), cursor: ArTransactionTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTransactionTypeScalarFieldEnumSchema, ArTransactionTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeFindFirstArgs>;

export const ArTransactionTypeFindFirstZodSchema = z.object({ select: ArTransactionTypeFindFirstSelectSchema.optional(),  orderBy: z.union([ArTransactionTypeOrderByWithRelationInputObjectSchema, ArTransactionTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransactionTypeWhereInputObjectSchema.optional(), cursor: ArTransactionTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArTransactionTypeScalarFieldEnumSchema, ArTransactionTypeScalarFieldEnumSchema.array()]).optional() }).strict();