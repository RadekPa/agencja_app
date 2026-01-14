import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dbo_LocalUserOrderByWithRelationInputObjectSchema as dbo_LocalUserOrderByWithRelationInputObjectSchema } from './objects/dbo_LocalUserOrderByWithRelationInput.schema';
import { dbo_LocalUserWhereInputObjectSchema as dbo_LocalUserWhereInputObjectSchema } from './objects/dbo_LocalUserWhereInput.schema';
import { dbo_LocalUserWhereUniqueInputObjectSchema as dbo_LocalUserWhereUniqueInputObjectSchema } from './objects/dbo_LocalUserWhereUniqueInput.schema';
import { DboLocalUserScalarFieldEnumSchema } from './enums/DboLocalUserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dbo_LocalUserFindManySelectSchema: z.ZodType<Prisma.dbo_LocalUserSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    passwordHash: z.boolean().optional(),
    role: z.boolean().optional(),
    permissions: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    locale: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserSelect>;

export const dbo_LocalUserFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    passwordHash: z.boolean().optional(),
    role: z.boolean().optional(),
    permissions: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    locale: z.boolean().optional()
  }).strict();

export const dbo_LocalUserFindManySchema: z.ZodType<Prisma.dbo_LocalUserFindManyArgs> = z.object({ select: dbo_LocalUserFindManySelectSchema.optional(),  orderBy: z.union([dbo_LocalUserOrderByWithRelationInputObjectSchema, dbo_LocalUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: dbo_LocalUserWhereInputObjectSchema.optional(), cursor: dbo_LocalUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DboLocalUserScalarFieldEnumSchema, DboLocalUserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserFindManyArgs>;

export const dbo_LocalUserFindManyZodSchema = z.object({ select: dbo_LocalUserFindManySelectSchema.optional(),  orderBy: z.union([dbo_LocalUserOrderByWithRelationInputObjectSchema, dbo_LocalUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: dbo_LocalUserWhereInputObjectSchema.optional(), cursor: dbo_LocalUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DboLocalUserScalarFieldEnumSchema, DboLocalUserScalarFieldEnumSchema.array()]).optional() }).strict();