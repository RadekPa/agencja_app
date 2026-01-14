import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './objects/dictLanguagesWhereInput.schema';

export const dictLanguagesDeleteManySchema: z.ZodType<Prisma.dictLanguagesDeleteManyArgs> = z.object({ where: dictLanguagesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictLanguagesDeleteManyArgs>;

export const dictLanguagesDeleteManyZodSchema = z.object({ where: dictLanguagesWhereInputObjectSchema.optional() }).strict();