import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblMaterialOrderByWithRelationInputObjectSchema as tblMaterialOrderByWithRelationInputObjectSchema } from './objects/tblMaterialOrderByWithRelationInput.schema';
import { tblMaterialWhereInputObjectSchema as tblMaterialWhereInputObjectSchema } from './objects/tblMaterialWhereInput.schema';
import { tblMaterialWhereUniqueInputObjectSchema as tblMaterialWhereUniqueInputObjectSchema } from './objects/tblMaterialWhereUniqueInput.schema';
import { TblMaterialCountAggregateInputObjectSchema as TblMaterialCountAggregateInputObjectSchema } from './objects/TblMaterialCountAggregateInput.schema';

export const tblMaterialCountSchema: z.ZodType<Prisma.tblMaterialCountArgs> = z.object({ orderBy: z.union([tblMaterialOrderByWithRelationInputObjectSchema, tblMaterialOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblMaterialWhereInputObjectSchema.optional(), cursor: tblMaterialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblMaterialCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblMaterialCountArgs>;

export const tblMaterialCountZodSchema = z.object({ orderBy: z.union([tblMaterialOrderByWithRelationInputObjectSchema, tblMaterialOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblMaterialWhereInputObjectSchema.optional(), cursor: tblMaterialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblMaterialCountAggregateInputObjectSchema ]).optional() }).strict();