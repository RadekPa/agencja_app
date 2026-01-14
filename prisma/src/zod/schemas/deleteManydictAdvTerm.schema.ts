import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermWhereInputObjectSchema as dictAdvTermWhereInputObjectSchema } from './objects/dictAdvTermWhereInput.schema';

export const dictAdvTermDeleteManySchema: z.ZodType<Prisma.dictAdvTermDeleteManyArgs> = z.object({ where: dictAdvTermWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvTermDeleteManyArgs>;

export const dictAdvTermDeleteManyZodSchema = z.object({ where: dictAdvTermWhereInputObjectSchema.optional() }).strict();