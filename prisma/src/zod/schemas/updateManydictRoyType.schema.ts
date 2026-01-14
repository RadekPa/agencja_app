import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyTypeUpdateManyMutationInputObjectSchema as dictRoyTypeUpdateManyMutationInputObjectSchema } from './objects/dictRoyTypeUpdateManyMutationInput.schema';
import { dictRoyTypeWhereInputObjectSchema as dictRoyTypeWhereInputObjectSchema } from './objects/dictRoyTypeWhereInput.schema';

export const dictRoyTypeUpdateManySchema: z.ZodType<Prisma.dictRoyTypeUpdateManyArgs> = z.object({ data: dictRoyTypeUpdateManyMutationInputObjectSchema, where: dictRoyTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeUpdateManyArgs>;

export const dictRoyTypeUpdateManyZodSchema = z.object({ data: dictRoyTypeUpdateManyMutationInputObjectSchema, where: dictRoyTypeWhereInputObjectSchema.optional() }).strict();