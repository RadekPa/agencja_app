import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCurrenciesWhereInputObjectSchema as dictCurrenciesWhereInputObjectSchema } from './objects/dictCurrenciesWhereInput.schema';

export const dictCurrenciesDeleteManySchema: z.ZodType<Prisma.dictCurrenciesDeleteManyArgs> = z.object({ where: dictCurrenciesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesDeleteManyArgs>;

export const dictCurrenciesDeleteManyZodSchema = z.object({ where: dictCurrenciesWhereInputObjectSchema.optional() }).strict();