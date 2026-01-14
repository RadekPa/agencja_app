import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCurrenciesSelectObjectSchema as dictCurrenciesSelectObjectSchema } from './objects/dictCurrenciesSelect.schema';
import { dictCurrenciesIncludeObjectSchema as dictCurrenciesIncludeObjectSchema } from './objects/dictCurrenciesInclude.schema';
import { dictCurrenciesWhereUniqueInputObjectSchema as dictCurrenciesWhereUniqueInputObjectSchema } from './objects/dictCurrenciesWhereUniqueInput.schema';
import { dictCurrenciesCreateInputObjectSchema as dictCurrenciesCreateInputObjectSchema } from './objects/dictCurrenciesCreateInput.schema';
import { dictCurrenciesUncheckedCreateInputObjectSchema as dictCurrenciesUncheckedCreateInputObjectSchema } from './objects/dictCurrenciesUncheckedCreateInput.schema';
import { dictCurrenciesUpdateInputObjectSchema as dictCurrenciesUpdateInputObjectSchema } from './objects/dictCurrenciesUpdateInput.schema';
import { dictCurrenciesUncheckedUpdateInputObjectSchema as dictCurrenciesUncheckedUpdateInputObjectSchema } from './objects/dictCurrenciesUncheckedUpdateInput.schema';

export const dictCurrenciesUpsertOneSchema: z.ZodType<Prisma.dictCurrenciesUpsertArgs> = z.object({ select: dictCurrenciesSelectObjectSchema.optional(), include: dictCurrenciesIncludeObjectSchema.optional(), where: dictCurrenciesWhereUniqueInputObjectSchema, create: z.union([ dictCurrenciesCreateInputObjectSchema, dictCurrenciesUncheckedCreateInputObjectSchema ]), update: z.union([ dictCurrenciesUpdateInputObjectSchema, dictCurrenciesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesUpsertArgs>;

export const dictCurrenciesUpsertOneZodSchema = z.object({ select: dictCurrenciesSelectObjectSchema.optional(), include: dictCurrenciesIncludeObjectSchema.optional(), where: dictCurrenciesWhereUniqueInputObjectSchema, create: z.union([ dictCurrenciesCreateInputObjectSchema, dictCurrenciesUncheckedCreateInputObjectSchema ]), update: z.union([ dictCurrenciesUpdateInputObjectSchema, dictCurrenciesUncheckedUpdateInputObjectSchema ]) }).strict();