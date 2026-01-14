import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitEventsOrderByWithRelationInputObjectSchema as tblTitEventsOrderByWithRelationInputObjectSchema } from './objects/tblTitEventsOrderByWithRelationInput.schema';
import { tblTitEventsWhereInputObjectSchema as tblTitEventsWhereInputObjectSchema } from './objects/tblTitEventsWhereInput.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './objects/tblTitEventsWhereUniqueInput.schema';
import { TblTitEventsCountAggregateInputObjectSchema as TblTitEventsCountAggregateInputObjectSchema } from './objects/TblTitEventsCountAggregateInput.schema';

export const tblTitEventsCountSchema: z.ZodType<Prisma.tblTitEventsCountArgs> = z.object({ orderBy: z.union([tblTitEventsOrderByWithRelationInputObjectSchema, tblTitEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitEventsWhereInputObjectSchema.optional(), cursor: tblTitEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblTitEventsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblTitEventsCountArgs>;

export const tblTitEventsCountZodSchema = z.object({ orderBy: z.union([tblTitEventsOrderByWithRelationInputObjectSchema, tblTitEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblTitEventsWhereInputObjectSchema.optional(), cursor: tblTitEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblTitEventsCountAggregateInputObjectSchema ]).optional() }).strict();