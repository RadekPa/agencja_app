import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AuthorOrderByWithRelationInputObjectSchema as AuthorOrderByWithRelationInputObjectSchema } from './objects/AuthorOrderByWithRelationInput.schema';
import { AuthorWhereInputObjectSchema as AuthorWhereInputObjectSchema } from './objects/AuthorWhereInput.schema';
import { AuthorWhereUniqueInputObjectSchema as AuthorWhereUniqueInputObjectSchema } from './objects/AuthorWhereUniqueInput.schema';
import { AuthorScalarFieldEnumSchema } from './enums/AuthorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuthorFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AuthorSelect> = z.object({
    id: z.boolean().optional(),
    fullName: z.boolean().optional(),
    firstName: z.boolean().optional(),
    middleName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    suffix: z.boolean().optional(),
    penName: z.boolean().optional(),
    userMod: z.boolean().optional(),
    dateMod: z.boolean().optional(),
    remarks: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AuthorSelect>;

export const AuthorFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    fullName: z.boolean().optional(),
    firstName: z.boolean().optional(),
    middleName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    suffix: z.boolean().optional(),
    penName: z.boolean().optional(),
    userMod: z.boolean().optional(),
    dateMod: z.boolean().optional(),
    remarks: z.boolean().optional()
  }).strict();

export const AuthorFindFirstOrThrowSchema: z.ZodType<Prisma.AuthorFindFirstOrThrowArgs> = z.object({ select: AuthorFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([AuthorOrderByWithRelationInputObjectSchema, AuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthorWhereInputObjectSchema.optional(), cursor: AuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuthorScalarFieldEnumSchema, AuthorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AuthorFindFirstOrThrowArgs>;

export const AuthorFindFirstOrThrowZodSchema = z.object({ select: AuthorFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([AuthorOrderByWithRelationInputObjectSchema, AuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthorWhereInputObjectSchema.optional(), cursor: AuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuthorScalarFieldEnumSchema, AuthorScalarFieldEnumSchema.array()]).optional() }).strict();