import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrTemplatesWhereInputObjectSchema as dictAgrTemplatesWhereInputObjectSchema } from './objects/dictAgrTemplatesWhereInput.schema';

export const dictAgrTemplatesDeleteManySchema: z.ZodType<Prisma.dictAgrTemplatesDeleteManyArgs> = z.object({ where: dictAgrTemplatesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictAgrTemplatesDeleteManyArgs>;

export const dictAgrTemplatesDeleteManyZodSchema = z.object({ where: dictAgrTemplatesWhereInputObjectSchema.optional() }).strict();