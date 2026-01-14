import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxOrderByWithRelationInputObjectSchema as tblTitAuxOrderByWithRelationInputObjectSchema } from './objects/tblTitAuxOrderByWithRelationInput.schema';
import { tblTitAuxWhereInputObjectSchema as tblTitAuxWhereInputObjectSchema } from './objects/tblTitAuxWhereInput.schema';
import { tblTitAuxWhereUniqueInputObjectSchema as tblTitAuxWhereUniqueInputObjectSchema } from './objects/tblTitAuxWhereUniqueInput.schema';
import { TblTitAuxCountAggregateInputObjectSchema as TblTitAuxCountAggregateInputObjectSchema } from './objects/TblTitAuxCountAggregateInput.schema';

export const tblTitAuxCountSchema: z.ZodType<Prisma.tblTitAuxCountArgs> = z.object({ orderBy: z.union([tblTitAuxOrderByWithRelationInputObjectSchema, tblTitAuxOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitAuxWhereInputObjectSchema.optional(), cursor: tblTitAuxWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblTitAuxCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitAuxCountArgs>;

export const tblTitAuxCountZodSchema = z.object({ orderBy: z.union([tblTitAuxOrderByWithRelationInputObjectSchema, tblTitAuxOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitAuxWhereInputObjectSchema.optional(), cursor: tblTitAuxWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblTitAuxCountAggregateInputObjectSchema ]).optional() }).strict();