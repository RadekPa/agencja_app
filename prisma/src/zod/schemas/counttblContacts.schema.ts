import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblContactsOrderByWithRelationInputObjectSchema as tblContactsOrderByWithRelationInputObjectSchema } from './objects/tblContactsOrderByWithRelationInput.schema';
import { tblContactsWhereInputObjectSchema as tblContactsWhereInputObjectSchema } from './objects/tblContactsWhereInput.schema';
import { tblContactsWhereUniqueInputObjectSchema as tblContactsWhereUniqueInputObjectSchema } from './objects/tblContactsWhereUniqueInput.schema';
import { TblContactsCountAggregateInputObjectSchema as TblContactsCountAggregateInputObjectSchema } from './objects/TblContactsCountAggregateInput.schema';

export const tblContactsCountSchema: z.ZodType<Prisma.tblContactsCountArgs> = z.object({ orderBy: z.union([tblContactsOrderByWithRelationInputObjectSchema, tblContactsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblContactsWhereInputObjectSchema.optional(), cursor: tblContactsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblContactsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblContactsCountArgs>;

export const tblContactsCountZodSchema = z.object({ orderBy: z.union([tblContactsOrderByWithRelationInputObjectSchema, tblContactsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblContactsWhereInputObjectSchema.optional(), cursor: tblContactsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblContactsCountAggregateInputObjectSchema ]).optional() }).strict();