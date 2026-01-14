import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './objects/dictStatesWhereInput.schema';

export const dictStatesDeleteManySchema: z.ZodType<Prisma.dictStatesDeleteManyArgs> = z.object({ where: dictStatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictStatesDeleteManyArgs>;

export const dictStatesDeleteManyZodSchema = z.object({ where: dictStatesWhereInputObjectSchema.optional() }).strict();