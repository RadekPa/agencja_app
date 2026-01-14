import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAuthorsOrderByWithRelationInputObjectSchema as tblAuthorsOrderByWithRelationInputObjectSchema } from './objects/tblAuthorsOrderByWithRelationInput.schema';
import { tblAuthorsWhereInputObjectSchema as tblAuthorsWhereInputObjectSchema } from './objects/tblAuthorsWhereInput.schema';
import { tblAuthorsWhereUniqueInputObjectSchema as tblAuthorsWhereUniqueInputObjectSchema } from './objects/tblAuthorsWhereUniqueInput.schema';
import { TblAuthorsCountAggregateInputObjectSchema as TblAuthorsCountAggregateInputObjectSchema } from './objects/TblAuthorsCountAggregateInput.schema';

export const tblAuthorsCountSchema: z.ZodType<Prisma.tblAuthorsCountArgs> = z.object({ orderBy: z.union([tblAuthorsOrderByWithRelationInputObjectSchema, tblAuthorsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAuthorsWhereInputObjectSchema.optional(), cursor: tblAuthorsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblAuthorsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblAuthorsCountArgs>;

export const tblAuthorsCountZodSchema = z.object({ orderBy: z.union([tblAuthorsOrderByWithRelationInputObjectSchema, tblAuthorsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAuthorsWhereInputObjectSchema.optional(), cursor: tblAuthorsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblAuthorsCountAggregateInputObjectSchema ]).optional() }).strict();