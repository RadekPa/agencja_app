import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCurrenciesSelectObjectSchema as dictCurrenciesSelectObjectSchema } from './objects/dictCurrenciesSelect.schema';
import { dictCurrenciesIncludeObjectSchema as dictCurrenciesIncludeObjectSchema } from './objects/dictCurrenciesInclude.schema';
import { dictCurrenciesWhereUniqueInputObjectSchema as dictCurrenciesWhereUniqueInputObjectSchema } from './objects/dictCurrenciesWhereUniqueInput.schema';

export const dictCurrenciesFindUniqueOrThrowSchema: z.ZodType<Prisma.dictCurrenciesFindUniqueOrThrowArgs> = z.object({ select: dictCurrenciesSelectObjectSchema.optional(), include: dictCurrenciesIncludeObjectSchema.optional(), where: dictCurrenciesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesFindUniqueOrThrowArgs>;

export const dictCurrenciesFindUniqueOrThrowZodSchema = z.object({ select: dictCurrenciesSelectObjectSchema.optional(), include: dictCurrenciesIncludeObjectSchema.optional(), where: dictCurrenciesWhereUniqueInputObjectSchema }).strict();