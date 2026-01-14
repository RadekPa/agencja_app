import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArDefaultAccountUpdateManyMutationInputObjectSchema as ArDefaultAccountUpdateManyMutationInputObjectSchema } from './objects/ArDefaultAccountUpdateManyMutationInput.schema';
import { ArDefaultAccountWhereInputObjectSchema as ArDefaultAccountWhereInputObjectSchema } from './objects/ArDefaultAccountWhereInput.schema';

export const ArDefaultAccountUpdateManySchema: z.ZodType<Prisma.ArDefaultAccountUpdateManyArgs> = z.object({ data: ArDefaultAccountUpdateManyMutationInputObjectSchema, where: ArDefaultAccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountUpdateManyArgs>;

export const ArDefaultAccountUpdateManyZodSchema = z.object({ data: ArDefaultAccountUpdateManyMutationInputObjectSchema, where: ArDefaultAccountWhereInputObjectSchema.optional() }).strict();