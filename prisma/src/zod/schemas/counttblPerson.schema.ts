import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonOrderByWithRelationInputObjectSchema as tblPersonOrderByWithRelationInputObjectSchema } from './objects/tblPersonOrderByWithRelationInput.schema';
import { tblPersonWhereInputObjectSchema as tblPersonWhereInputObjectSchema } from './objects/tblPersonWhereInput.schema';
import { tblPersonWhereUniqueInputObjectSchema as tblPersonWhereUniqueInputObjectSchema } from './objects/tblPersonWhereUniqueInput.schema';
import { TblPersonCountAggregateInputObjectSchema as TblPersonCountAggregateInputObjectSchema } from './objects/TblPersonCountAggregateInput.schema';

export const tblPersonCountSchema: z.ZodType<Prisma.tblPersonCountArgs> = z.object({ orderBy: z.union([tblPersonOrderByWithRelationInputObjectSchema, tblPersonOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPersonWhereInputObjectSchema.optional(), cursor: tblPersonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPersonCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPersonCountArgs>;

export const tblPersonCountZodSchema = z.object({ orderBy: z.union([tblPersonOrderByWithRelationInputObjectSchema, tblPersonOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPersonWhereInputObjectSchema.optional(), cursor: tblPersonWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPersonCountAggregateInputObjectSchema ]).optional() }).strict();