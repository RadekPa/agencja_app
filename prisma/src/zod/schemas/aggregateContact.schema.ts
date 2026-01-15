import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactOrderByWithRelationInputObjectSchema as ContactOrderByWithRelationInputObjectSchema } from './objects/ContactOrderByWithRelationInput.schema';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';
import { ContactCountAggregateInputObjectSchema as ContactCountAggregateInputObjectSchema } from './objects/ContactCountAggregateInput.schema';
import { ContactMinAggregateInputObjectSchema as ContactMinAggregateInputObjectSchema } from './objects/ContactMinAggregateInput.schema';
import { ContactMaxAggregateInputObjectSchema as ContactMaxAggregateInputObjectSchema } from './objects/ContactMaxAggregateInput.schema';
import { ContactAvgAggregateInputObjectSchema as ContactAvgAggregateInputObjectSchema } from './objects/ContactAvgAggregateInput.schema';
import { ContactSumAggregateInputObjectSchema as ContactSumAggregateInputObjectSchema } from './objects/ContactSumAggregateInput.schema';

export const ContactAggregateSchema: z.ZodType<Prisma.ContactAggregateArgs> = z.object({ orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ContactCountAggregateInputObjectSchema ]).optional(), _min: ContactMinAggregateInputObjectSchema.optional(), _max: ContactMaxAggregateInputObjectSchema.optional(), _avg: ContactAvgAggregateInputObjectSchema.optional(), _sum: ContactSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactAggregateArgs>;

export const ContactAggregateZodSchema = z.object({ orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ContactCountAggregateInputObjectSchema ]).optional(), _min: ContactMinAggregateInputObjectSchema.optional(), _max: ContactMaxAggregateInputObjectSchema.optional(), _avg: ContactAvgAggregateInputObjectSchema.optional(), _sum: ContactSumAggregateInputObjectSchema.optional() }).strict();