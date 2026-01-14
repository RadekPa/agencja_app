import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictSubmSentTypeUpdateManyMutationInputObjectSchema as dictSubmSentTypeUpdateManyMutationInputObjectSchema } from './objects/dictSubmSentTypeUpdateManyMutationInput.schema';
import { dictSubmSentTypeWhereInputObjectSchema as dictSubmSentTypeWhereInputObjectSchema } from './objects/dictSubmSentTypeWhereInput.schema';

export const dictSubmSentTypeUpdateManySchema: z.ZodType<Prisma.dictSubmSentTypeUpdateManyArgs> = z.object({ data: dictSubmSentTypeUpdateManyMutationInputObjectSchema, where: dictSubmSentTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictSubmSentTypeUpdateManyArgs>;

export const dictSubmSentTypeUpdateManyZodSchema = z.object({ data: dictSubmSentTypeUpdateManyMutationInputObjectSchema, where: dictSubmSentTypeWhereInputObjectSchema.optional() }).strict();