import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginOrderByWithRelationInputObjectSchema as tblPersonLoginOrderByWithRelationInputObjectSchema } from './objects/tblPersonLoginOrderByWithRelationInput.schema';
import { tblPersonLoginWhereInputObjectSchema as tblPersonLoginWhereInputObjectSchema } from './objects/tblPersonLoginWhereInput.schema';
import { tblPersonLoginWhereUniqueInputObjectSchema as tblPersonLoginWhereUniqueInputObjectSchema } from './objects/tblPersonLoginWhereUniqueInput.schema';
import { TblPersonLoginCountAggregateInputObjectSchema as TblPersonLoginCountAggregateInputObjectSchema } from './objects/TblPersonLoginCountAggregateInput.schema';

export const tblPersonLoginCountSchema: z.ZodType<Prisma.tblPersonLoginCountArgs> = z.object({ orderBy: z.union([tblPersonLoginOrderByWithRelationInputObjectSchema, tblPersonLoginOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPersonLoginWhereInputObjectSchema.optional(), cursor: tblPersonLoginWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPersonLoginCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginCountArgs>;

export const tblPersonLoginCountZodSchema = z.object({ orderBy: z.union([tblPersonLoginOrderByWithRelationInputObjectSchema, tblPersonLoginOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPersonLoginWhereInputObjectSchema.optional(), cursor: tblPersonLoginWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPersonLoginCountAggregateInputObjectSchema ]).optional() }).strict();