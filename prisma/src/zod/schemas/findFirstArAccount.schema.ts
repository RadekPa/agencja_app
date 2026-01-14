import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountOrderByWithRelationInputObjectSchema as ArAccountOrderByWithRelationInputObjectSchema } from './objects/ArAccountOrderByWithRelationInput.schema';
import { ArAccountWhereInputObjectSchema as ArAccountWhereInputObjectSchema } from './objects/ArAccountWhereInput.schema';
import { ArAccountWhereUniqueInputObjectSchema as ArAccountWhereUniqueInputObjectSchema } from './objects/ArAccountWhereUniqueInput.schema';
import { ArAccountScalarFieldEnumSchema } from './enums/ArAccountScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArAccountFindFirstSelectSchema: z.ZodType<Prisma.ArAccountSelect> = z.object({
    AccountID: z.boolean().optional(),
    AccountDescription: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArAccountSelect>;

export const ArAccountFindFirstSelectZodSchema = z.object({
    AccountID: z.boolean().optional(),
    AccountDescription: z.boolean().optional()
  }).strict();

export const ArAccountFindFirstSchema: z.ZodType<Prisma.ArAccountFindFirstArgs> = z.object({ select: ArAccountFindFirstSelectSchema.optional(),  orderBy: z.union([ArAccountOrderByWithRelationInputObjectSchema, ArAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArAccountWhereInputObjectSchema.optional(), cursor: ArAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArAccountScalarFieldEnumSchema, ArAccountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArAccountFindFirstArgs>;

export const ArAccountFindFirstZodSchema = z.object({ select: ArAccountFindFirstSelectSchema.optional(),  orderBy: z.union([ArAccountOrderByWithRelationInputObjectSchema, ArAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArAccountWhereInputObjectSchema.optional(), cursor: ArAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArAccountScalarFieldEnumSchema, ArAccountScalarFieldEnumSchema.array()]).optional() }).strict();