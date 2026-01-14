import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansWhereInputObjectSchema as pdxBilansWhereInputObjectSchema } from './objects/pdxBilansWhereInput.schema';

export const pdxBilansDeleteManySchema: z.ZodType<Prisma.pdxBilansDeleteManyArgs> = z.object({ where: pdxBilansWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.pdxBilansDeleteManyArgs>;

export const pdxBilansDeleteManyZodSchema = z.object({ where: pdxBilansWhereInputObjectSchema.optional() }).strict();