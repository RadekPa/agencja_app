import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCurrenciesUpdateManyMutationInputObjectSchema as dictCurrenciesUpdateManyMutationInputObjectSchema } from './objects/dictCurrenciesUpdateManyMutationInput.schema';
import { dictCurrenciesWhereInputObjectSchema as dictCurrenciesWhereInputObjectSchema } from './objects/dictCurrenciesWhereInput.schema';

export const dictCurrenciesUpdateManySchema: z.ZodType<Prisma.dictCurrenciesUpdateManyArgs> = z.object({ data: dictCurrenciesUpdateManyMutationInputObjectSchema, where: dictCurrenciesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesUpdateManyArgs>;

export const dictCurrenciesUpdateManyZodSchema = z.object({ data: dictCurrenciesUpdateManyMutationInputObjectSchema, where: dictCurrenciesWhereInputObjectSchema.optional() }).strict();