import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountUpdateManyMutationInputObjectSchema as ArAccountUpdateManyMutationInputObjectSchema } from './objects/ArAccountUpdateManyMutationInput.schema';
import { ArAccountWhereInputObjectSchema as ArAccountWhereInputObjectSchema } from './objects/ArAccountWhereInput.schema';

export const ArAccountUpdateManySchema: z.ZodType<Prisma.ArAccountUpdateManyArgs> = z.object({ data: ArAccountUpdateManyMutationInputObjectSchema, where: ArAccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArAccountUpdateManyArgs>;

export const ArAccountUpdateManyZodSchema = z.object({ data: ArAccountUpdateManyMutationInputObjectSchema, where: ArAccountWhereInputObjectSchema.optional() }).strict();