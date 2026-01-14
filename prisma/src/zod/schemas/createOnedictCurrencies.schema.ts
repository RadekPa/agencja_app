import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCurrenciesSelectObjectSchema as dictCurrenciesSelectObjectSchema } from './objects/dictCurrenciesSelect.schema';
import { dictCurrenciesIncludeObjectSchema as dictCurrenciesIncludeObjectSchema } from './objects/dictCurrenciesInclude.schema';
import { dictCurrenciesCreateInputObjectSchema as dictCurrenciesCreateInputObjectSchema } from './objects/dictCurrenciesCreateInput.schema';
import { dictCurrenciesUncheckedCreateInputObjectSchema as dictCurrenciesUncheckedCreateInputObjectSchema } from './objects/dictCurrenciesUncheckedCreateInput.schema';

export const dictCurrenciesCreateOneSchema: z.ZodType<Prisma.dictCurrenciesCreateArgs> = z.object({ select: dictCurrenciesSelectObjectSchema.optional(), include: dictCurrenciesIncludeObjectSchema.optional(), data: z.union([dictCurrenciesCreateInputObjectSchema, dictCurrenciesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesCreateArgs>;

export const dictCurrenciesCreateOneZodSchema = z.object({ select: dictCurrenciesSelectObjectSchema.optional(), include: dictCurrenciesIncludeObjectSchema.optional(), data: z.union([dictCurrenciesCreateInputObjectSchema, dictCurrenciesUncheckedCreateInputObjectSchema]) }).strict();