import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeWhereInputObjectSchema as dictMatTypeWhereInputObjectSchema } from './objects/dictMatTypeWhereInput.schema';

export const dictMatTypeDeleteManySchema: z.ZodType<Prisma.dictMatTypeDeleteManyArgs> = z.object({ where: dictMatTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictMatTypeDeleteManyArgs>;

export const dictMatTypeDeleteManyZodSchema = z.object({ where: dictMatTypeWhereInputObjectSchema.optional() }).strict();