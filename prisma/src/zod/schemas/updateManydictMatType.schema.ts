import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeUpdateManyMutationInputObjectSchema as dictMatTypeUpdateManyMutationInputObjectSchema } from './objects/dictMatTypeUpdateManyMutationInput.schema';
import { dictMatTypeWhereInputObjectSchema as dictMatTypeWhereInputObjectSchema } from './objects/dictMatTypeWhereInput.schema';

export const dictMatTypeUpdateManySchema: z.ZodType<Prisma.dictMatTypeUpdateManyArgs> = z.object({ data: dictMatTypeUpdateManyMutationInputObjectSchema, where: dictMatTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictMatTypeUpdateManyArgs>;

export const dictMatTypeUpdateManyZodSchema = z.object({ data: dictMatTypeUpdateManyMutationInputObjectSchema, where: dictMatTypeWhereInputObjectSchema.optional() }).strict();