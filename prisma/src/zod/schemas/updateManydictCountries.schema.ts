import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountriesUpdateManyMutationInputObjectSchema as dictCountriesUpdateManyMutationInputObjectSchema } from './objects/dictCountriesUpdateManyMutationInput.schema';
import { dictCountriesWhereInputObjectSchema as dictCountriesWhereInputObjectSchema } from './objects/dictCountriesWhereInput.schema';

export const dictCountriesUpdateManySchema: z.ZodType<Prisma.dictCountriesUpdateManyArgs> = z.object({ data: dictCountriesUpdateManyMutationInputObjectSchema, where: dictCountriesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCountriesUpdateManyArgs>;

export const dictCountriesUpdateManyZodSchema = z.object({ data: dictCountriesUpdateManyMutationInputObjectSchema, where: dictCountriesWhereInputObjectSchema.optional() }).strict();