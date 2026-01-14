import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyRatesOrderByWithRelationInputObjectSchema as tblRoyRatesOrderByWithRelationInputObjectSchema } from './objects/tblRoyRatesOrderByWithRelationInput.schema';
import { tblRoyRatesWhereInputObjectSchema as tblRoyRatesWhereInputObjectSchema } from './objects/tblRoyRatesWhereInput.schema';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './objects/tblRoyRatesWhereUniqueInput.schema';
import { TblRoyRatesCountAggregateInputObjectSchema as TblRoyRatesCountAggregateInputObjectSchema } from './objects/TblRoyRatesCountAggregateInput.schema';

export const tblRoyRatesCountSchema: z.ZodType<Prisma.tblRoyRatesCountArgs> = z.object({ orderBy: z.union([tblRoyRatesOrderByWithRelationInputObjectSchema, tblRoyRatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblRoyRatesWhereInputObjectSchema.optional(), cursor: tblRoyRatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblRoyRatesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblRoyRatesCountArgs>;

export const tblRoyRatesCountZodSchema = z.object({ orderBy: z.union([tblRoyRatesOrderByWithRelationInputObjectSchema, tblRoyRatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblRoyRatesWhereInputObjectSchema.optional(), cursor: tblRoyRatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblRoyRatesCountAggregateInputObjectSchema ]).optional() }).strict();