import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountOrderByWithRelationInputObjectSchema as ArAccountOrderByWithRelationInputObjectSchema } from './objects/ArAccountOrderByWithRelationInput.schema';
import { ArAccountWhereInputObjectSchema as ArAccountWhereInputObjectSchema } from './objects/ArAccountWhereInput.schema';
import { ArAccountWhereUniqueInputObjectSchema as ArAccountWhereUniqueInputObjectSchema } from './objects/ArAccountWhereUniqueInput.schema';
import { ArAccountScalarFieldEnumSchema } from './enums/ArAccountScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ArAccountFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ArAccountSelect> = z.object({
    AccountID: z.boolean().optional(),
    AccountDescription: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ArAccountSelect>;

export const ArAccountFindFirstOrThrowSelectZodSchema = z.object({
    AccountID: z.boolean().optional(),
    AccountDescription: z.boolean().optional()
  }).strict();

export const ArAccountFindFirstOrThrowSchema: z.ZodType<Prisma.ArAccountFindFirstOrThrowArgs> = z.object({ select: ArAccountFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([ArAccountOrderByWithRelationInputObjectSchema, ArAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArAccountWhereInputObjectSchema.optional(), cursor: ArAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArAccountScalarFieldEnumSchema, ArAccountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ArAccountFindFirstOrThrowArgs>;

export const ArAccountFindFirstOrThrowZodSchema = z.object({ select: ArAccountFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([ArAccountOrderByWithRelationInputObjectSchema, ArAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArAccountWhereInputObjectSchema.optional(), cursor: ArAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ArAccountScalarFieldEnumSchema, ArAccountScalarFieldEnumSchema.array()]).optional() }).strict();