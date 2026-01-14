import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountriesSelectObjectSchema as dictCountriesSelectObjectSchema } from './objects/dictCountriesSelect.schema';
import { dictCountriesUpdateInputObjectSchema as dictCountriesUpdateInputObjectSchema } from './objects/dictCountriesUpdateInput.schema';
import { dictCountriesUncheckedUpdateInputObjectSchema as dictCountriesUncheckedUpdateInputObjectSchema } from './objects/dictCountriesUncheckedUpdateInput.schema';
import { dictCountriesWhereUniqueInputObjectSchema as dictCountriesWhereUniqueInputObjectSchema } from './objects/dictCountriesWhereUniqueInput.schema';

export const dictCountriesUpdateOneSchema: z.ZodType<Prisma.dictCountriesUpdateArgs> = z.object({ select: dictCountriesSelectObjectSchema.optional(),  data: z.union([dictCountriesUpdateInputObjectSchema, dictCountriesUncheckedUpdateInputObjectSchema]), where: dictCountriesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCountriesUpdateArgs>;

export const dictCountriesUpdateOneZodSchema = z.object({ select: dictCountriesSelectObjectSchema.optional(),  data: z.union([dictCountriesUpdateInputObjectSchema, dictCountriesUncheckedUpdateInputObjectSchema]), where: dictCountriesWhereUniqueInputObjectSchema }).strict();