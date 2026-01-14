import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountriesWhereInputObjectSchema as dictCountriesWhereInputObjectSchema } from './objects/dictCountriesWhereInput.schema';

export const dictCountriesDeleteManySchema: z.ZodType<Prisma.dictCountriesDeleteManyArgs> = z.object({ where: dictCountriesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCountriesDeleteManyArgs>;

export const dictCountriesDeleteManyZodSchema = z.object({ where: dictCountriesWhereInputObjectSchema.optional() }).strict();