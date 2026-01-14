import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './objects/dictCountries_oldWhereInput.schema';

export const dictCountries_oldDeleteManySchema: z.ZodType<Prisma.dictCountries_oldDeleteManyArgs> = z.object({ where: dictCountries_oldWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCountries_oldDeleteManyArgs>;

export const dictCountries_oldDeleteManyZodSchema = z.object({ where: dictCountries_oldWhereInputObjectSchema.optional() }).strict();