import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyaltyOrderByWithRelationInputObjectSchema as tblRoyaltyOrderByWithRelationInputObjectSchema } from './objects/tblRoyaltyOrderByWithRelationInput.schema';
import { tblRoyaltyWhereInputObjectSchema as tblRoyaltyWhereInputObjectSchema } from './objects/tblRoyaltyWhereInput.schema';
import { tblRoyaltyWhereUniqueInputObjectSchema as tblRoyaltyWhereUniqueInputObjectSchema } from './objects/tblRoyaltyWhereUniqueInput.schema';
import { TblRoyaltyCountAggregateInputObjectSchema as TblRoyaltyCountAggregateInputObjectSchema } from './objects/TblRoyaltyCountAggregateInput.schema';

export const tblRoyaltyCountSchema: z.ZodType<Prisma.tblRoyaltyCountArgs> = z.object({ orderBy: z.union([tblRoyaltyOrderByWithRelationInputObjectSchema, tblRoyaltyOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblRoyaltyWhereInputObjectSchema.optional(), cursor: tblRoyaltyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblRoyaltyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblRoyaltyCountArgs>;

export const tblRoyaltyCountZodSchema = z.object({ orderBy: z.union([tblRoyaltyOrderByWithRelationInputObjectSchema, tblRoyaltyOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblRoyaltyWhereInputObjectSchema.optional(), cursor: tblRoyaltyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblRoyaltyCountAggregateInputObjectSchema ]).optional() }).strict();