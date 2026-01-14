import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictLanguagesUpdateManyMutationInputObjectSchema as dictLanguagesUpdateManyMutationInputObjectSchema } from './objects/dictLanguagesUpdateManyMutationInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './objects/dictLanguagesWhereInput.schema';

export const dictLanguagesUpdateManySchema: z.ZodType<Prisma.dictLanguagesUpdateManyArgs> = z.object({ data: dictLanguagesUpdateManyMutationInputObjectSchema, where: dictLanguagesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictLanguagesUpdateManyArgs>;

export const dictLanguagesUpdateManyZodSchema = z.object({ data: dictLanguagesUpdateManyMutationInputObjectSchema, where: dictLanguagesWhereInputObjectSchema.optional() }).strict();