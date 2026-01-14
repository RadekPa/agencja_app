import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountriesSelectObjectSchema as dictCountriesSelectObjectSchema } from './objects/dictCountriesSelect.schema';
import { dictCountriesCreateInputObjectSchema as dictCountriesCreateInputObjectSchema } from './objects/dictCountriesCreateInput.schema';
import { dictCountriesUncheckedCreateInputObjectSchema as dictCountriesUncheckedCreateInputObjectSchema } from './objects/dictCountriesUncheckedCreateInput.schema';

export const dictCountriesCreateOneSchema: z.ZodType<Prisma.dictCountriesCreateArgs> = z.object({ select: dictCountriesSelectObjectSchema.optional(),  data: z.union([dictCountriesCreateInputObjectSchema, dictCountriesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictCountriesCreateArgs>;

export const dictCountriesCreateOneZodSchema = z.object({ select: dictCountriesSelectObjectSchema.optional(),  data: z.union([dictCountriesCreateInputObjectSchema, dictCountriesUncheckedCreateInputObjectSchema]) }).strict();