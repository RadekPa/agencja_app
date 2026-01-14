import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesOrderByWithRelationInputObjectSchema as tblTitlesOrderByWithRelationInputObjectSchema } from './objects/tblTitlesOrderByWithRelationInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './objects/tblTitlesWhereInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './objects/tblTitlesWhereUniqueInput.schema';
import { TblTitlesCountAggregateInputObjectSchema as TblTitlesCountAggregateInputObjectSchema } from './objects/TblTitlesCountAggregateInput.schema';

export const tblTitlesCountSchema: z.ZodType<Prisma.tblTitlesCountArgs> = z.object({ orderBy: z.union([tblTitlesOrderByWithRelationInputObjectSchema, tblTitlesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitlesWhereInputObjectSchema.optional(), cursor: tblTitlesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblTitlesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitlesCountArgs>;

export const tblTitlesCountZodSchema = z.object({ orderBy: z.union([tblTitlesOrderByWithRelationInputObjectSchema, tblTitlesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitlesWhereInputObjectSchema.optional(), cursor: tblTitlesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblTitlesCountAggregateInputObjectSchema ]).optional() }).strict();