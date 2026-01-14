import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountriesOrderByWithRelationInputObjectSchema as dictCountriesOrderByWithRelationInputObjectSchema } from './objects/dictCountriesOrderByWithRelationInput.schema';
import { dictCountriesWhereInputObjectSchema as dictCountriesWhereInputObjectSchema } from './objects/dictCountriesWhereInput.schema';
import { dictCountriesWhereUniqueInputObjectSchema as dictCountriesWhereUniqueInputObjectSchema } from './objects/dictCountriesWhereUniqueInput.schema';
import { DictCountriesCountAggregateInputObjectSchema as DictCountriesCountAggregateInputObjectSchema } from './objects/DictCountriesCountAggregateInput.schema';

export const dictCountriesCountSchema: z.ZodType<Prisma.dictCountriesCountArgs> = z.object({ orderBy: z.union([dictCountriesOrderByWithRelationInputObjectSchema, dictCountriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCountriesWhereInputObjectSchema.optional(), cursor: dictCountriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCountriesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCountriesCountArgs>;

export const dictCountriesCountZodSchema = z.object({ orderBy: z.union([dictCountriesOrderByWithRelationInputObjectSchema, dictCountriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCountriesWhereInputObjectSchema.optional(), cursor: dictCountriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCountriesCountAggregateInputObjectSchema ]).optional() }).strict();