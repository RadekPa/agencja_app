import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMailingListsOrderByWithRelationInputObjectSchema as tblMailingListsOrderByWithRelationInputObjectSchema } from './objects/tblMailingListsOrderByWithRelationInput.schema';
import { tblMailingListsWhereInputObjectSchema as tblMailingListsWhereInputObjectSchema } from './objects/tblMailingListsWhereInput.schema';
import { tblMailingListsWhereUniqueInputObjectSchema as tblMailingListsWhereUniqueInputObjectSchema } from './objects/tblMailingListsWhereUniqueInput.schema';
import { TblMailingListsCountAggregateInputObjectSchema as TblMailingListsCountAggregateInputObjectSchema } from './objects/TblMailingListsCountAggregateInput.schema';

export const tblMailingListsCountSchema: z.ZodType<Prisma.tblMailingListsCountArgs> = z.object({ orderBy: z.union([tblMailingListsOrderByWithRelationInputObjectSchema, tblMailingListsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblMailingListsWhereInputObjectSchema.optional(), cursor: tblMailingListsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblMailingListsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblMailingListsCountArgs>;

export const tblMailingListsCountZodSchema = z.object({ orderBy: z.union([tblMailingListsOrderByWithRelationInputObjectSchema, tblMailingListsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblMailingListsWhereInputObjectSchema.optional(), cursor: tblMailingListsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblMailingListsCountAggregateInputObjectSchema ]).optional() }).strict();