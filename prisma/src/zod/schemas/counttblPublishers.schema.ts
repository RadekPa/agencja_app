import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPublishersOrderByWithRelationInputObjectSchema as tblPublishersOrderByWithRelationInputObjectSchema } from './objects/tblPublishersOrderByWithRelationInput.schema';
import { tblPublishersWhereInputObjectSchema as tblPublishersWhereInputObjectSchema } from './objects/tblPublishersWhereInput.schema';
import { tblPublishersWhereUniqueInputObjectSchema as tblPublishersWhereUniqueInputObjectSchema } from './objects/tblPublishersWhereUniqueInput.schema';
import { TblPublishersCountAggregateInputObjectSchema as TblPublishersCountAggregateInputObjectSchema } from './objects/TblPublishersCountAggregateInput.schema';

export const tblPublishersCountSchema: z.ZodType<Prisma.tblPublishersCountArgs> = z.object({ orderBy: z.union([tblPublishersOrderByWithRelationInputObjectSchema, tblPublishersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPublishersWhereInputObjectSchema.optional(), cursor: tblPublishersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPublishersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblPublishersCountArgs>;

export const tblPublishersCountZodSchema = z.object({ orderBy: z.union([tblPublishersOrderByWithRelationInputObjectSchema, tblPublishersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblPublishersWhereInputObjectSchema.optional(), cursor: tblPublishersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblPublishersCountAggregateInputObjectSchema ]).optional() }).strict();