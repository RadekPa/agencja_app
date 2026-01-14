import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountriesSelectObjectSchema as dictCountriesSelectObjectSchema } from './objects/dictCountriesSelect.schema';
import { dictCountriesWhereUniqueInputObjectSchema as dictCountriesWhereUniqueInputObjectSchema } from './objects/dictCountriesWhereUniqueInput.schema';
import { dictCountriesCreateInputObjectSchema as dictCountriesCreateInputObjectSchema } from './objects/dictCountriesCreateInput.schema';
import { dictCountriesUncheckedCreateInputObjectSchema as dictCountriesUncheckedCreateInputObjectSchema } from './objects/dictCountriesUncheckedCreateInput.schema';
import { dictCountriesUpdateInputObjectSchema as dictCountriesUpdateInputObjectSchema } from './objects/dictCountriesUpdateInput.schema';
import { dictCountriesUncheckedUpdateInputObjectSchema as dictCountriesUncheckedUpdateInputObjectSchema } from './objects/dictCountriesUncheckedUpdateInput.schema';

export const dictCountriesUpsertOneSchema: z.ZodType<Prisma.dictCountriesUpsertArgs> = z.object({ select: dictCountriesSelectObjectSchema.optional(),  where: dictCountriesWhereUniqueInputObjectSchema, create: z.union([ dictCountriesCreateInputObjectSchema, dictCountriesUncheckedCreateInputObjectSchema ]), update: z.union([ dictCountriesUpdateInputObjectSchema, dictCountriesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictCountriesUpsertArgs>;

export const dictCountriesUpsertOneZodSchema = z.object({ select: dictCountriesSelectObjectSchema.optional(),  where: dictCountriesWhereUniqueInputObjectSchema, create: z.union([ dictCountriesCreateInputObjectSchema, dictCountriesUncheckedCreateInputObjectSchema ]), update: z.union([ dictCountriesUpdateInputObjectSchema, dictCountriesUncheckedUpdateInputObjectSchema ]) }).strict();