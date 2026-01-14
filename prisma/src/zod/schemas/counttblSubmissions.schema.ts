import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmissionsOrderByWithRelationInputObjectSchema as tblSubmissionsOrderByWithRelationInputObjectSchema } from './objects/tblSubmissionsOrderByWithRelationInput.schema';
import { tblSubmissionsWhereInputObjectSchema as tblSubmissionsWhereInputObjectSchema } from './objects/tblSubmissionsWhereInput.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './objects/tblSubmissionsWhereUniqueInput.schema';
import { TblSubmissionsCountAggregateInputObjectSchema as TblSubmissionsCountAggregateInputObjectSchema } from './objects/TblSubmissionsCountAggregateInput.schema';

export const tblSubmissionsCountSchema: z.ZodType<Prisma.tblSubmissionsCountArgs> = z.object({ orderBy: z.union([tblSubmissionsOrderByWithRelationInputObjectSchema, tblSubmissionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSubmissionsWhereInputObjectSchema.optional(), cursor: tblSubmissionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblSubmissionsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblSubmissionsCountArgs>;

export const tblSubmissionsCountZodSchema = z.object({ orderBy: z.union([tblSubmissionsOrderByWithRelationInputObjectSchema, tblSubmissionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblSubmissionsWhereInputObjectSchema.optional(), cursor: tblSubmissionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblSubmissionsCountAggregateInputObjectSchema ]).optional() }).strict();