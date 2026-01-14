import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblFraVAT_NewOrderByWithRelationInputObjectSchema as tblFraVAT_NewOrderByWithRelationInputObjectSchema } from './objects/tblFraVAT_NewOrderByWithRelationInput.schema';
import { tblFraVAT_NewWhereInputObjectSchema as tblFraVAT_NewWhereInputObjectSchema } from './objects/tblFraVAT_NewWhereInput.schema';
import { tblFraVAT_NewWhereUniqueInputObjectSchema as tblFraVAT_NewWhereUniqueInputObjectSchema } from './objects/tblFraVAT_NewWhereUniqueInput.schema';
import { TblFraVAT_NewCountAggregateInputObjectSchema as TblFraVAT_NewCountAggregateInputObjectSchema } from './objects/TblFraVAT_NewCountAggregateInput.schema';

export const tblFraVAT_NewCountSchema: z.ZodType<Prisma.tblFraVAT_NewCountArgs> = z.object({ orderBy: z.union([tblFraVAT_NewOrderByWithRelationInputObjectSchema, tblFraVAT_NewOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblFraVAT_NewWhereInputObjectSchema.optional(), cursor: tblFraVAT_NewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblFraVAT_NewCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblFraVAT_NewCountArgs>;

export const tblFraVAT_NewCountZodSchema = z.object({ orderBy: z.union([tblFraVAT_NewOrderByWithRelationInputObjectSchema, tblFraVAT_NewOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblFraVAT_NewWhereInputObjectSchema.optional(), cursor: tblFraVAT_NewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblFraVAT_NewCountAggregateInputObjectSchema ]).optional() }).strict();