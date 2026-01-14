import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyAccountIntervalWhereInputObjectSchema as dictRoyAccountIntervalWhereInputObjectSchema } from './objects/dictRoyAccountIntervalWhereInput.schema';

export const dictRoyAccountIntervalDeleteManySchema: z.ZodType<Prisma.dictRoyAccountIntervalDeleteManyArgs> = z.object({ where: dictRoyAccountIntervalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalDeleteManyArgs>;

export const dictRoyAccountIntervalDeleteManyZodSchema = z.object({ where: dictRoyAccountIntervalWhereInputObjectSchema.optional() }).strict();