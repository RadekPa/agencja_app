import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubLocalOrderByWithRelationInputObjectSchema as tblPubLocalOrderByWithRelationInputObjectSchema } from './objects/tblPubLocalOrderByWithRelationInput.schema';
import { tblPubLocalWhereInputObjectSchema as tblPubLocalWhereInputObjectSchema } from './objects/tblPubLocalWhereInput.schema';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './objects/tblPubLocalWhereUniqueInput.schema';
import { TblPubLocalCountAggregateInputObjectSchema as TblPubLocalCountAggregateInputObjectSchema } from './objects/TblPubLocalCountAggregateInput.schema';

export const tblPubLocalCountSchema: z.ZodType<Prisma.tblPubLocalCountArgs> = z.object({ orderBy: z.union([tblPubLocalOrderByWithRelationInputObjectSchema, tblPubLocalOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPubLocalWhereInputObjectSchema.optional(), cursor: tblPubLocalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPubLocalCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPubLocalCountArgs>;

export const tblPubLocalCountZodSchema = z.object({ orderBy: z.union([tblPubLocalOrderByWithRelationInputObjectSchema, tblPubLocalOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPubLocalWhereInputObjectSchema.optional(), cursor: tblPubLocalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPubLocalCountAggregateInputObjectSchema ]).optional() }).strict();