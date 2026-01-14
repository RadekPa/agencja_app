import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrRightsOrderByWithRelationInputObjectSchema as tblAgrRightsOrderByWithRelationInputObjectSchema } from './objects/tblAgrRightsOrderByWithRelationInput.schema';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './objects/tblAgrRightsWhereInput.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './objects/tblAgrRightsWhereUniqueInput.schema';
import { TblAgrRightsCountAggregateInputObjectSchema as TblAgrRightsCountAggregateInputObjectSchema } from './objects/TblAgrRightsCountAggregateInput.schema';

export const tblAgrRightsCountSchema: z.ZodType<Prisma.tblAgrRightsCountArgs> = z.object({ orderBy: z.union([tblAgrRightsOrderByWithRelationInputObjectSchema, tblAgrRightsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgrRightsWhereInputObjectSchema.optional(), cursor: tblAgrRightsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblAgrRightsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblAgrRightsCountArgs>;

export const tblAgrRightsCountZodSchema = z.object({ orderBy: z.union([tblAgrRightsOrderByWithRelationInputObjectSchema, tblAgrRightsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAgrRightsWhereInputObjectSchema.optional(), cursor: tblAgrRightsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblAgrRightsCountAggregateInputObjectSchema ]).optional() }).strict();