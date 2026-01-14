import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustTypesOrderByWithRelationInputObjectSchema as tblCustTypesOrderByWithRelationInputObjectSchema } from './objects/tblCustTypesOrderByWithRelationInput.schema';
import { tblCustTypesWhereInputObjectSchema as tblCustTypesWhereInputObjectSchema } from './objects/tblCustTypesWhereInput.schema';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './objects/tblCustTypesWhereUniqueInput.schema';
import { TblCustTypesCountAggregateInputObjectSchema as TblCustTypesCountAggregateInputObjectSchema } from './objects/TblCustTypesCountAggregateInput.schema';

export const tblCustTypesCountSchema: z.ZodType<Prisma.tblCustTypesCountArgs> = z.object({ orderBy: z.union([tblCustTypesOrderByWithRelationInputObjectSchema, tblCustTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustTypesWhereInputObjectSchema.optional(), cursor: tblCustTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCustTypesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustTypesCountArgs>;

export const tblCustTypesCountZodSchema = z.object({ orderBy: z.union([tblCustTypesOrderByWithRelationInputObjectSchema, tblCustTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustTypesWhereInputObjectSchema.optional(), cursor: tblCustTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCustTypesCountAggregateInputObjectSchema ]).optional() }).strict();