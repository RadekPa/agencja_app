import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountries_oldUpdateManyMutationInputObjectSchema as dictCountries_oldUpdateManyMutationInputObjectSchema } from './objects/dictCountries_oldUpdateManyMutationInput.schema';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './objects/dictCountries_oldWhereInput.schema';

export const dictCountries_oldUpdateManySchema: z.ZodType<Prisma.dictCountries_oldUpdateManyArgs> = z.object({ data: dictCountries_oldUpdateManyMutationInputObjectSchema, where: dictCountries_oldWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCountries_oldUpdateManyArgs>;

export const dictCountries_oldUpdateManyZodSchema = z.object({ data: dictCountries_oldUpdateManyMutationInputObjectSchema, where: dictCountries_oldWhereInputObjectSchema.optional() }).strict();