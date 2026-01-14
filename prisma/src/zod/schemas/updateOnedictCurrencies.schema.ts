import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCurrenciesSelectObjectSchema as dictCurrenciesSelectObjectSchema } from './objects/dictCurrenciesSelect.schema';
import { dictCurrenciesIncludeObjectSchema as dictCurrenciesIncludeObjectSchema } from './objects/dictCurrenciesInclude.schema';
import { dictCurrenciesUpdateInputObjectSchema as dictCurrenciesUpdateInputObjectSchema } from './objects/dictCurrenciesUpdateInput.schema';
import { dictCurrenciesUncheckedUpdateInputObjectSchema as dictCurrenciesUncheckedUpdateInputObjectSchema } from './objects/dictCurrenciesUncheckedUpdateInput.schema';
import { dictCurrenciesWhereUniqueInputObjectSchema as dictCurrenciesWhereUniqueInputObjectSchema } from './objects/dictCurrenciesWhereUniqueInput.schema';

export const dictCurrenciesUpdateOneSchema: z.ZodType<Prisma.dictCurrenciesUpdateArgs> = z.object({ select: dictCurrenciesSelectObjectSchema.optional(), include: dictCurrenciesIncludeObjectSchema.optional(), data: z.union([dictCurrenciesUpdateInputObjectSchema, dictCurrenciesUncheckedUpdateInputObjectSchema]), where: dictCurrenciesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesUpdateArgs>;

export const dictCurrenciesUpdateOneZodSchema = z.object({ select: dictCurrenciesSelectObjectSchema.optional(), include: dictCurrenciesIncludeObjectSchema.optional(), data: z.union([dictCurrenciesUpdateInputObjectSchema, dictCurrenciesUncheckedUpdateInputObjectSchema]), where: dictCurrenciesWhereUniqueInputObjectSchema }).strict();