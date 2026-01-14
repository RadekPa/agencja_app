import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuthorsOrderByWithRelationInputObjectSchema as tblTitAuthorsOrderByWithRelationInputObjectSchema } from './objects/tblTitAuthorsOrderByWithRelationInput.schema';
import { tblTitAuthorsWhereInputObjectSchema as tblTitAuthorsWhereInputObjectSchema } from './objects/tblTitAuthorsWhereInput.schema';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './objects/tblTitAuthorsWhereUniqueInput.schema';
import { TblTitAuthorsCountAggregateInputObjectSchema as TblTitAuthorsCountAggregateInputObjectSchema } from './objects/TblTitAuthorsCountAggregateInput.schema';

export const tblTitAuthorsCountSchema: z.ZodType<Prisma.tblTitAuthorsCountArgs> = z.object({ orderBy: z.union([tblTitAuthorsOrderByWithRelationInputObjectSchema, tblTitAuthorsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitAuthorsWhereInputObjectSchema.optional(), cursor: tblTitAuthorsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblTitAuthorsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitAuthorsCountArgs>;

export const tblTitAuthorsCountZodSchema = z.object({ orderBy: z.union([tblTitAuthorsOrderByWithRelationInputObjectSchema, tblTitAuthorsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitAuthorsWhereInputObjectSchema.optional(), cursor: tblTitAuthorsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblTitAuthorsCountAggregateInputObjectSchema ]).optional() }).strict();