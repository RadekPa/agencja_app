import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './objects/tblCustomersOrderByWithRelationInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './objects/tblCustomersWhereInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './objects/tblCustomersWhereUniqueInput.schema';
import { TblCustomersCountAggregateInputObjectSchema as TblCustomersCountAggregateInputObjectSchema } from './objects/TblCustomersCountAggregateInput.schema';

export const tblCustomersCountSchema: z.ZodType<Prisma.tblCustomersCountArgs> = z.object({ orderBy: z.union([tblCustomersOrderByWithRelationInputObjectSchema, tblCustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustomersWhereInputObjectSchema.optional(), cursor: tblCustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCustomersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustomersCountArgs>;

export const tblCustomersCountZodSchema = z.object({ orderBy: z.union([tblCustomersOrderByWithRelationInputObjectSchema, tblCustomersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustomersWhereInputObjectSchema.optional(), cursor: tblCustomersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCustomersCountAggregateInputObjectSchema ]).optional() }).strict();