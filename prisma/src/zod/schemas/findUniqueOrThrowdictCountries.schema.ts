import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountriesSelectObjectSchema as dictCountriesSelectObjectSchema } from './objects/dictCountriesSelect.schema';
import { dictCountriesWhereUniqueInputObjectSchema as dictCountriesWhereUniqueInputObjectSchema } from './objects/dictCountriesWhereUniqueInput.schema';

export const dictCountriesFindUniqueOrThrowSchema: z.ZodType<Prisma.dictCountriesFindUniqueOrThrowArgs> = z.object({ select: dictCountriesSelectObjectSchema.optional(),  where: dictCountriesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCountriesFindUniqueOrThrowArgs>;

export const dictCountriesFindUniqueOrThrowZodSchema = z.object({ select: dictCountriesSelectObjectSchema.optional(),  where: dictCountriesWhereUniqueInputObjectSchema }).strict();