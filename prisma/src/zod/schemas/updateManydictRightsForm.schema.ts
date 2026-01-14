import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRightsFormUpdateManyMutationInputObjectSchema as dictRightsFormUpdateManyMutationInputObjectSchema } from './objects/dictRightsFormUpdateManyMutationInput.schema';
import { dictRightsFormWhereInputObjectSchema as dictRightsFormWhereInputObjectSchema } from './objects/dictRightsFormWhereInput.schema';

export const dictRightsFormUpdateManySchema: z.ZodType<Prisma.dictRightsFormUpdateManyArgs> = z.object({ data: dictRightsFormUpdateManyMutationInputObjectSchema, where: dictRightsFormWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictRightsFormUpdateManyArgs>;

export const dictRightsFormUpdateManyZodSchema = z.object({ data: dictRightsFormUpdateManyMutationInputObjectSchema, where: dictRightsFormWhereInputObjectSchema.optional() }).strict();