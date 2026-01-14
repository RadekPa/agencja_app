import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictDistributionTypeWhereInputObjectSchema as dictDistributionTypeWhereInputObjectSchema } from './objects/dictDistributionTypeWhereInput.schema';

export const dictDistributionTypeDeleteManySchema: z.ZodType<Prisma.dictDistributionTypeDeleteManyArgs> = z.object({ where: dictDistributionTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictDistributionTypeDeleteManyArgs>;

export const dictDistributionTypeDeleteManyZodSchema = z.object({ where: dictDistributionTypeWhereInputObjectSchema.optional() }).strict();