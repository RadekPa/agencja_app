import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermUpdateManyMutationInputObjectSchema as dictAdvTermUpdateManyMutationInputObjectSchema } from './objects/dictAdvTermUpdateManyMutationInput.schema';
import { dictAdvTermWhereInputObjectSchema as dictAdvTermWhereInputObjectSchema } from './objects/dictAdvTermWhereInput.schema';

export const dictAdvTermUpdateManySchema: z.ZodType<Prisma.dictAdvTermUpdateManyArgs> = z.object({ data: dictAdvTermUpdateManyMutationInputObjectSchema, where: dictAdvTermWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvTermUpdateManyArgs>;

export const dictAdvTermUpdateManyZodSchema = z.object({ data: dictAdvTermUpdateManyMutationInputObjectSchema, where: dictAdvTermWhereInputObjectSchema.optional() }).strict();