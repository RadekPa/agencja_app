import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArApplyUpdateManyMutationInputObjectSchema as ArApplyUpdateManyMutationInputObjectSchema } from './objects/ArApplyUpdateManyMutationInput.schema';
import { ArApplyWhereInputObjectSchema as ArApplyWhereInputObjectSchema } from './objects/ArApplyWhereInput.schema';

export const ArApplyUpdateManySchema: z.ZodType<Prisma.ArApplyUpdateManyArgs> = z.object({ data: ArApplyUpdateManyMutationInputObjectSchema, where: ArApplyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArApplyUpdateManyArgs>;

export const ArApplyUpdateManyZodSchema = z.object({ data: ArApplyUpdateManyMutationInputObjectSchema, where: ArApplyWhereInputObjectSchema.optional() }).strict();