import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPlacesOrderByWithRelationInputObjectSchema as tblPlacesOrderByWithRelationInputObjectSchema } from './objects/tblPlacesOrderByWithRelationInput.schema';
import { tblPlacesWhereInputObjectSchema as tblPlacesWhereInputObjectSchema } from './objects/tblPlacesWhereInput.schema';
import { tblPlacesWhereUniqueInputObjectSchema as tblPlacesWhereUniqueInputObjectSchema } from './objects/tblPlacesWhereUniqueInput.schema';
import { TblPlacesCountAggregateInputObjectSchema as TblPlacesCountAggregateInputObjectSchema } from './objects/TblPlacesCountAggregateInput.schema';

export const tblPlacesCountSchema: z.ZodType<Prisma.tblPlacesCountArgs> = z.object({ orderBy: z.union([tblPlacesOrderByWithRelationInputObjectSchema, tblPlacesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPlacesWhereInputObjectSchema.optional(), cursor: tblPlacesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPlacesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPlacesCountArgs>;

export const tblPlacesCountZodSchema = z.object({ orderBy: z.union([tblPlacesOrderByWithRelationInputObjectSchema, tblPlacesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPlacesWhereInputObjectSchema.optional(), cursor: tblPlacesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPlacesCountAggregateInputObjectSchema ]).optional() }).strict();