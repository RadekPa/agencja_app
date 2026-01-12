import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BookAuthorIncludeObjectSchema as BookAuthorIncludeObjectSchema } from './objects/BookAuthorInclude.schema';
import { BookAuthorOrderByWithRelationInputObjectSchema as BookAuthorOrderByWithRelationInputObjectSchema } from './objects/BookAuthorOrderByWithRelationInput.schema';
import { BookAuthorWhereInputObjectSchema as BookAuthorWhereInputObjectSchema } from './objects/BookAuthorWhereInput.schema';
import { BookAuthorWhereUniqueInputObjectSchema as BookAuthorWhereUniqueInputObjectSchema } from './objects/BookAuthorWhereUniqueInput.schema';
import { BookAuthorScalarFieldEnumSchema } from './enums/BookAuthorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookAuthorFindFirstSelectSchema: z.ZodType<Prisma.BookAuthorSelect> = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    middleName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    description: z.boolean().optional(),
    workEmail: z.boolean().optional(),
    personalEmail: z.boolean().optional(),
    photos: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BookAuthorSelect>;

export const BookAuthorFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    middleName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    description: z.boolean().optional(),
    workEmail: z.boolean().optional(),
    personalEmail: z.boolean().optional(),
    photos: z.boolean().optional(),
    clientId: z.boolean().optional(),
    client: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const BookAuthorFindFirstSchema: z.ZodType<Prisma.BookAuthorFindFirstArgs> = z.object({ select: BookAuthorFindFirstSelectSchema.optional(), include: z.lazy(() => BookAuthorIncludeObjectSchema.optional()), orderBy: z.union([BookAuthorOrderByWithRelationInputObjectSchema, BookAuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: BookAuthorWhereInputObjectSchema.optional(), cursor: BookAuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BookAuthorScalarFieldEnumSchema, BookAuthorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BookAuthorFindFirstArgs>;

export const BookAuthorFindFirstZodSchema = z.object({ select: BookAuthorFindFirstSelectSchema.optional(), include: z.lazy(() => BookAuthorIncludeObjectSchema.optional()), orderBy: z.union([BookAuthorOrderByWithRelationInputObjectSchema, BookAuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: BookAuthorWhereInputObjectSchema.optional(), cursor: BookAuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BookAuthorScalarFieldEnumSchema, BookAuthorScalarFieldEnumSchema.array()]).optional() }).strict();