import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustContactsOrderByWithRelationInputObjectSchema as tblCustContactsOrderByWithRelationInputObjectSchema } from './objects/tblCustContactsOrderByWithRelationInput.schema';
import { tblCustContactsWhereInputObjectSchema as tblCustContactsWhereInputObjectSchema } from './objects/tblCustContactsWhereInput.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './objects/tblCustContactsWhereUniqueInput.schema';
import { TblCustContactsCountAggregateInputObjectSchema as TblCustContactsCountAggregateInputObjectSchema } from './objects/TblCustContactsCountAggregateInput.schema';

export const tblCustContactsCountSchema: z.ZodType<Prisma.tblCustContactsCountArgs> = z.object({ orderBy: z.union([tblCustContactsOrderByWithRelationInputObjectSchema, tblCustContactsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustContactsWhereInputObjectSchema.optional(), cursor: tblCustContactsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCustContactsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustContactsCountArgs>;

export const tblCustContactsCountZodSchema = z.object({ orderBy: z.union([tblCustContactsOrderByWithRelationInputObjectSchema, tblCustContactsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustContactsWhereInputObjectSchema.optional(), cursor: tblCustContactsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCustContactsCountAggregateInputObjectSchema ]).optional() }).strict();