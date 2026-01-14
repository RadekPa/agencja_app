import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRightsFormWhereInputObjectSchema as dictRightsFormWhereInputObjectSchema } from './objects/dictRightsFormWhereInput.schema';

export const dictRightsFormDeleteManySchema: z.ZodType<Prisma.dictRightsFormDeleteManyArgs> = z.object({ where: dictRightsFormWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictRightsFormDeleteManyArgs>;

export const dictRightsFormDeleteManyZodSchema = z.object({ where: dictRightsFormWhereInputObjectSchema.optional() }).strict();