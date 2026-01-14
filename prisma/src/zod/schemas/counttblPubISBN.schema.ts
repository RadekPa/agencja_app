import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubISBNOrderByWithRelationInputObjectSchema as tblPubISBNOrderByWithRelationInputObjectSchema } from './objects/tblPubISBNOrderByWithRelationInput.schema';
import { tblPubISBNWhereInputObjectSchema as tblPubISBNWhereInputObjectSchema } from './objects/tblPubISBNWhereInput.schema';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './objects/tblPubISBNWhereUniqueInput.schema';
import { TblPubISBNCountAggregateInputObjectSchema as TblPubISBNCountAggregateInputObjectSchema } from './objects/TblPubISBNCountAggregateInput.schema';

export const tblPubISBNCountSchema: z.ZodType<Prisma.tblPubISBNCountArgs> = z.object({ orderBy: z.union([tblPubISBNOrderByWithRelationInputObjectSchema, tblPubISBNOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPubISBNWhereInputObjectSchema.optional(), cursor: tblPubISBNWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPubISBNCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPubISBNCountArgs>;

export const tblPubISBNCountZodSchema = z.object({ orderBy: z.union([tblPubISBNOrderByWithRelationInputObjectSchema, tblPubISBNOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPubISBNWhereInputObjectSchema.optional(), cursor: tblPubISBNWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPubISBNCountAggregateInputObjectSchema ]).optional() }).strict();