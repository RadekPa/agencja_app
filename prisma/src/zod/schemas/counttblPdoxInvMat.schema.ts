import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatOrderByWithRelationInputObjectSchema as tblPdoxInvMatOrderByWithRelationInputObjectSchema } from './objects/tblPdoxInvMatOrderByWithRelationInput.schema';
import { tblPdoxInvMatWhereInputObjectSchema as tblPdoxInvMatWhereInputObjectSchema } from './objects/tblPdoxInvMatWhereInput.schema';
import { tblPdoxInvMatWhereUniqueInputObjectSchema as tblPdoxInvMatWhereUniqueInputObjectSchema } from './objects/tblPdoxInvMatWhereUniqueInput.schema';
import { TblPdoxInvMatCountAggregateInputObjectSchema as TblPdoxInvMatCountAggregateInputObjectSchema } from './objects/TblPdoxInvMatCountAggregateInput.schema';

export const tblPdoxInvMatCountSchema: z.ZodType<Prisma.tblPdoxInvMatCountArgs> = z.object({ orderBy: z.union([tblPdoxInvMatOrderByWithRelationInputObjectSchema, tblPdoxInvMatOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPdoxInvMatWhereInputObjectSchema.optional(), cursor: tblPdoxInvMatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPdoxInvMatCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatCountArgs>;

export const tblPdoxInvMatCountZodSchema = z.object({ orderBy: z.union([tblPdoxInvMatOrderByWithRelationInputObjectSchema, tblPdoxInvMatOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPdoxInvMatWhereInputObjectSchema.optional(), cursor: tblPdoxInvMatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPdoxInvMatCountAggregateInputObjectSchema ]).optional() }).strict();