import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountriesSelectObjectSchema as dictCountriesSelectObjectSchema } from './objects/dictCountriesSelect.schema';
import { dictCountriesWhereUniqueInputObjectSchema as dictCountriesWhereUniqueInputObjectSchema } from './objects/dictCountriesWhereUniqueInput.schema';

export const dictCountriesDeleteOneSchema: z.ZodType<Prisma.dictCountriesDeleteArgs> = z.object({ select: dictCountriesSelectObjectSchema.optional(),  where: dictCountriesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCountriesDeleteArgs>;

export const dictCountriesDeleteOneZodSchema = z.object({ select: dictCountriesSelectObjectSchema.optional(),  where: dictCountriesWhereUniqueInputObjectSchema }).strict();