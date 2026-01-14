import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeWhereInputObjectSchema as dictAdvTypeWhereInputObjectSchema } from './objects/dictAdvTypeWhereInput.schema';

export const dictAdvTypeDeleteManySchema: z.ZodType<Prisma.dictAdvTypeDeleteManyArgs> = z.object({ where: dictAdvTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeDeleteManyArgs>;

export const dictAdvTypeDeleteManyZodSchema = z.object({ where: dictAdvTypeWhereInputObjectSchema.optional() }).strict();