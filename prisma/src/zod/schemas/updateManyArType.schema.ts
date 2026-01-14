import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeUpdateManyMutationInputObjectSchema as ArTypeUpdateManyMutationInputObjectSchema } from './objects/ArTypeUpdateManyMutationInput.schema';
import { ArTypeWhereInputObjectSchema as ArTypeWhereInputObjectSchema } from './objects/ArTypeWhereInput.schema';

export const ArTypeUpdateManySchema: z.ZodType<Prisma.ArTypeUpdateManyArgs> = z.object({ data: ArTypeUpdateManyMutationInputObjectSchema, where: ArTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTypeUpdateManyArgs>;

export const ArTypeUpdateManyZodSchema = z.object({ data: ArTypeUpdateManyMutationInputObjectSchema, where: ArTypeWhereInputObjectSchema.optional() }).strict();