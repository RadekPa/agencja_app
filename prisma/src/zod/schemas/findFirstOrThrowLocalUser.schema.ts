import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocalUserOrderByWithRelationInputObjectSchema as LocalUserOrderByWithRelationInputObjectSchema } from './objects/LocalUserOrderByWithRelationInput.schema';
import { LocalUserWhereInputObjectSchema as LocalUserWhereInputObjectSchema } from './objects/LocalUserWhereInput.schema';
import { LocalUserWhereUniqueInputObjectSchema as LocalUserWhereUniqueInputObjectSchema } from './objects/LocalUserWhereUniqueInput.schema';
import { LocalUserScalarFieldEnumSchema } from './enums/LocalUserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LocalUserFindFirstOrThrowSelectSchema: z.ZodType<Prisma.LocalUserSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    passwordHash: z.boolean().optional(),
    role: z.boolean().optional(),
    permissions: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    locale: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LocalUserSelect>;

export const LocalUserFindFirstOrThrowSelectZodSchema = z.object({
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

export const LocalUserFindFirstOrThrowSchema: z.ZodType<Prisma.LocalUserFindFirstOrThrowArgs> = z.object({ select: LocalUserFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([LocalUserOrderByWithRelationInputObjectSchema, LocalUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocalUserWhereInputObjectSchema.optional(), cursor: LocalUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LocalUserScalarFieldEnumSchema, LocalUserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LocalUserFindFirstOrThrowArgs>;

export const LocalUserFindFirstOrThrowZodSchema = z.object({ select: LocalUserFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([LocalUserOrderByWithRelationInputObjectSchema, LocalUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocalUserWhereInputObjectSchema.optional(), cursor: LocalUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LocalUserScalarFieldEnumSchema, LocalUserScalarFieldEnumSchema.array()]).optional() }).strict();