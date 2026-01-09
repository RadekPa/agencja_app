import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactOrderByWithRelationInputObjectSchema as ContactOrderByWithRelationInputObjectSchema } from './objects/ContactOrderByWithRelationInput.schema';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';
import { ContactCountAggregateInputObjectSchema as ContactCountAggregateInputObjectSchema } from './objects/ContactCountAggregateInput.schema';

export const ContactCountSchema: z.ZodType<Prisma.ContactCountArgs> = z.object({ orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ContactCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ContactCountArgs>;

export const ContactCountZodSchema = z.object({ orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ContactCountAggregateInputObjectSchema ]).optional() }).strict();