import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyAccountIntervalUpdateManyMutationInputObjectSchema as dictRoyAccountIntervalUpdateManyMutationInputObjectSchema } from './objects/dictRoyAccountIntervalUpdateManyMutationInput.schema';
import { dictRoyAccountIntervalWhereInputObjectSchema as dictRoyAccountIntervalWhereInputObjectSchema } from './objects/dictRoyAccountIntervalWhereInput.schema';

export const dictRoyAccountIntervalUpdateManySchema: z.ZodType<Prisma.dictRoyAccountIntervalUpdateManyArgs> = z.object({ data: dictRoyAccountIntervalUpdateManyMutationInputObjectSchema, where: dictRoyAccountIntervalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalUpdateManyArgs>;

export const dictRoyAccountIntervalUpdateManyZodSchema = z.object({ data: dictRoyAccountIntervalUpdateManyMutationInputObjectSchema, where: dictRoyAccountIntervalWhereInputObjectSchema.optional() }).strict();