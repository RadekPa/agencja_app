import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSeriesOrderByWithRelationInputObjectSchema as tblSeriesOrderByWithRelationInputObjectSchema } from './objects/tblSeriesOrderByWithRelationInput.schema';
import { tblSeriesWhereInputObjectSchema as tblSeriesWhereInputObjectSchema } from './objects/tblSeriesWhereInput.schema';
import { tblSeriesWhereUniqueInputObjectSchema as tblSeriesWhereUniqueInputObjectSchema } from './objects/tblSeriesWhereUniqueInput.schema';
import { TblSeriesCountAggregateInputObjectSchema as TblSeriesCountAggregateInputObjectSchema } from './objects/TblSeriesCountAggregateInput.schema';

export const tblSeriesCountSchema: z.ZodType<Prisma.tblSeriesCountArgs> = z.object({ orderBy: z.union([tblSeriesOrderByWithRelationInputObjectSchema, tblSeriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSeriesWhereInputObjectSchema.optional(), cursor: tblSeriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblSeriesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblSeriesCountArgs>;

export const tblSeriesCountZodSchema = z.object({ orderBy: z.union([tblSeriesOrderByWithRelationInputObjectSchema, tblSeriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSeriesWhereInputObjectSchema.optional(), cursor: tblSeriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblSeriesCountAggregateInputObjectSchema ]).optional() }).strict();