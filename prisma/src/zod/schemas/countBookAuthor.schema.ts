import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BookAuthorOrderByWithRelationInputObjectSchema as BookAuthorOrderByWithRelationInputObjectSchema } from './objects/BookAuthorOrderByWithRelationInput.schema';
import { BookAuthorWhereInputObjectSchema as BookAuthorWhereInputObjectSchema } from './objects/BookAuthorWhereInput.schema';
import { BookAuthorWhereUniqueInputObjectSchema as BookAuthorWhereUniqueInputObjectSchema } from './objects/BookAuthorWhereUniqueInput.schema';
import { BookAuthorCountAggregateInputObjectSchema as BookAuthorCountAggregateInputObjectSchema } from './objects/BookAuthorCountAggregateInput.schema';

export const BookAuthorCountSchema: z.ZodType<Prisma.BookAuthorCountArgs> = z.object({ orderBy: z.union([BookAuthorOrderByWithRelationInputObjectSchema, BookAuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: BookAuthorWhereInputObjectSchema.optional(), cursor: BookAuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BookAuthorCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BookAuthorCountArgs>;

export const BookAuthorCountZodSchema = z.object({ orderBy: z.union([BookAuthorOrderByWithRelationInputObjectSchema, BookAuthorOrderByWithRelationInputObjectSchema.array()]).optional(), where: BookAuthorWhereInputObjectSchema.optional(), cursor: BookAuthorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BookAuthorCountAggregateInputObjectSchema ]).optional() }).strict();