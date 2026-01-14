import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsOrderByWithRelationInputObjectSchema as tblSubmEventsOrderByWithRelationInputObjectSchema } from './objects/tblSubmEventsOrderByWithRelationInput.schema';
import { tblSubmEventsWhereInputObjectSchema as tblSubmEventsWhereInputObjectSchema } from './objects/tblSubmEventsWhereInput.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './objects/tblSubmEventsWhereUniqueInput.schema';
import { TblSubmEventsCountAggregateInputObjectSchema as TblSubmEventsCountAggregateInputObjectSchema } from './objects/TblSubmEventsCountAggregateInput.schema';

export const tblSubmEventsCountSchema: z.ZodType<Prisma.tblSubmEventsCountArgs> = z.object({ orderBy: z.union([tblSubmEventsOrderByWithRelationInputObjectSchema, tblSubmEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSubmEventsWhereInputObjectSchema.optional(), cursor: tblSubmEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblSubmEventsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsCountArgs>;

export const tblSubmEventsCountZodSchema = z.object({ orderBy: z.union([tblSubmEventsOrderByWithRelationInputObjectSchema, tblSubmEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSubmEventsWhereInputObjectSchema.optional(), cursor: tblSubmEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblSubmEventsCountAggregateInputObjectSchema ]).optional() }).strict();