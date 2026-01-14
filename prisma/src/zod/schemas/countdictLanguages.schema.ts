import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictLanguagesOrderByWithRelationInputObjectSchema as dictLanguagesOrderByWithRelationInputObjectSchema } from './objects/dictLanguagesOrderByWithRelationInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './objects/dictLanguagesWhereInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './objects/dictLanguagesWhereUniqueInput.schema';
import { DictLanguagesCountAggregateInputObjectSchema as DictLanguagesCountAggregateInputObjectSchema } from './objects/DictLanguagesCountAggregateInput.schema';

export const dictLanguagesCountSchema: z.ZodType<Prisma.dictLanguagesCountArgs> = z.object({ orderBy: z.union([dictLanguagesOrderByWithRelationInputObjectSchema, dictLanguagesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictLanguagesWhereInputObjectSchema.optional(), cursor: dictLanguagesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictLanguagesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictLanguagesCountArgs>;

export const dictLanguagesCountZodSchema = z.object({ orderBy: z.union([dictLanguagesOrderByWithRelationInputObjectSchema, dictLanguagesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictLanguagesWhereInputObjectSchema.optional(), cursor: dictLanguagesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictLanguagesCountAggregateInputObjectSchema ]).optional() }).strict();