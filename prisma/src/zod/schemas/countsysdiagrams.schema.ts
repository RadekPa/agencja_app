import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { sysdiagramsOrderByWithRelationInputObjectSchema as sysdiagramsOrderByWithRelationInputObjectSchema } from './objects/sysdiagramsOrderByWithRelationInput.schema';
import { sysdiagramsWhereInputObjectSchema as sysdiagramsWhereInputObjectSchema } from './objects/sysdiagramsWhereInput.schema';
import { sysdiagramsWhereUniqueInputObjectSchema as sysdiagramsWhereUniqueInputObjectSchema } from './objects/sysdiagramsWhereUniqueInput.schema';
import { SysdiagramsCountAggregateInputObjectSchema as SysdiagramsCountAggregateInputObjectSchema } from './objects/SysdiagramsCountAggregateInput.schema';

export const sysdiagramsCountSchema: z.ZodType<Prisma.sysdiagramsCountArgs> = z.object({ orderBy: z.union([sysdiagramsOrderByWithRelationInputObjectSchema, sysdiagramsOrderByWithRelationInputObjectSchema.array()]).optional(), where: sysdiagramsWhereInputObjectSchema.optional(), cursor: sysdiagramsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SysdiagramsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.sysdiagramsCountArgs>;

export const sysdiagramsCountZodSchema = z.object({ orderBy: z.union([sysdiagramsOrderByWithRelationInputObjectSchema, sysdiagramsOrderByWithRelationInputObjectSchema.array()]).optional(), where: sysdiagramsWhereInputObjectSchema.optional(), cursor: sysdiagramsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SysdiagramsCountAggregateInputObjectSchema ]).optional() }).strict();