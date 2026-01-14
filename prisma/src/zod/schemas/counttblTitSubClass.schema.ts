import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitSubClassOrderByWithRelationInputObjectSchema as tblTitSubClassOrderByWithRelationInputObjectSchema } from './objects/tblTitSubClassOrderByWithRelationInput.schema';
import { tblTitSubClassWhereInputObjectSchema as tblTitSubClassWhereInputObjectSchema } from './objects/tblTitSubClassWhereInput.schema';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './objects/tblTitSubClassWhereUniqueInput.schema';
import { TblTitSubClassCountAggregateInputObjectSchema as TblTitSubClassCountAggregateInputObjectSchema } from './objects/TblTitSubClassCountAggregateInput.schema';

export const tblTitSubClassCountSchema: z.ZodType<Prisma.tblTitSubClassCountArgs> = z.object({ orderBy: z.union([tblTitSubClassOrderByWithRelationInputObjectSchema, tblTitSubClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitSubClassWhereInputObjectSchema.optional(), cursor: tblTitSubClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblTitSubClassCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassCountArgs>;

export const tblTitSubClassCountZodSchema = z.object({ orderBy: z.union([tblTitSubClassOrderByWithRelationInputObjectSchema, tblTitSubClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitSubClassWhereInputObjectSchema.optional(), cursor: tblTitSubClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblTitSubClassCountAggregateInputObjectSchema ]).optional() }).strict();