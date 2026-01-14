import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrEventsOrderByWithRelationInputObjectSchema as tblAgrEventsOrderByWithRelationInputObjectSchema } from './objects/tblAgrEventsOrderByWithRelationInput.schema';
import { tblAgrEventsWhereInputObjectSchema as tblAgrEventsWhereInputObjectSchema } from './objects/tblAgrEventsWhereInput.schema';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './objects/tblAgrEventsWhereUniqueInput.schema';
import { TblAgrEventsCountAggregateInputObjectSchema as TblAgrEventsCountAggregateInputObjectSchema } from './objects/TblAgrEventsCountAggregateInput.schema';

export const tblAgrEventsCountSchema: z.ZodType<Prisma.tblAgrEventsCountArgs> = z.object({ orderBy: z.union([tblAgrEventsOrderByWithRelationInputObjectSchema, tblAgrEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgrEventsWhereInputObjectSchema.optional(), cursor: tblAgrEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblAgrEventsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsCountArgs>;

export const tblAgrEventsCountZodSchema = z.object({ orderBy: z.union([tblAgrEventsOrderByWithRelationInputObjectSchema, tblAgrEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgrEventsWhereInputObjectSchema.optional(), cursor: tblAgrEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblAgrEventsCountAggregateInputObjectSchema ]).optional() }).strict();