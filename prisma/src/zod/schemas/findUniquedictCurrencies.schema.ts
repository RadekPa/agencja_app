import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCurrenciesSelectObjectSchema as dictCurrenciesSelectObjectSchema } from './objects/dictCurrenciesSelect.schema';
import { dictCurrenciesIncludeObjectSchema as dictCurrenciesIncludeObjectSchema } from './objects/dictCurrenciesInclude.schema';
import { dictCurrenciesWhereUniqueInputObjectSchema as dictCurrenciesWhereUniqueInputObjectSchema } from './objects/dictCurrenciesWhereUniqueInput.schema';

export const dictCurrenciesFindUniqueSchema: z.ZodType<Prisma.dictCurrenciesFindUniqueArgs> = z.object({ select: dictCurrenciesSelectObjectSchema.optional(), include: dictCurrenciesIncludeObjectSchema.optional(), where: dictCurrenciesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesFindUniqueArgs>;

export const dictCurrenciesFindUniqueZodSchema = z.object({ select: dictCurrenciesSelectObjectSchema.optional(), include: dictCurrenciesIncludeObjectSchema.optional(), where: dictCurrenciesWhereUniqueInputObjectSchema }).strict();