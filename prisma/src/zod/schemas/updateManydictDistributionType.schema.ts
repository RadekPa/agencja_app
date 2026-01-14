import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictDistributionTypeUpdateManyMutationInputObjectSchema as dictDistributionTypeUpdateManyMutationInputObjectSchema } from './objects/dictDistributionTypeUpdateManyMutationInput.schema';
import { dictDistributionTypeWhereInputObjectSchema as dictDistributionTypeWhereInputObjectSchema } from './objects/dictDistributionTypeWhereInput.schema';

export const dictDistributionTypeUpdateManySchema: z.ZodType<Prisma.dictDistributionTypeUpdateManyArgs> = z.object({ data: dictDistributionTypeUpdateManyMutationInputObjectSchema, where: dictDistributionTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictDistributionTypeUpdateManyArgs>;

export const dictDistributionTypeUpdateManyZodSchema = z.object({ data: dictDistributionTypeUpdateManyMutationInputObjectSchema, where: dictDistributionTypeWhereInputObjectSchema.optional() }).strict();