import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeUpdateManyMutationInputObjectSchema as dictAdvTypeUpdateManyMutationInputObjectSchema } from './objects/dictAdvTypeUpdateManyMutationInput.schema';
import { dictAdvTypeWhereInputObjectSchema as dictAdvTypeWhereInputObjectSchema } from './objects/dictAdvTypeWhereInput.schema';

export const dictAdvTypeUpdateManySchema: z.ZodType<Prisma.dictAdvTypeUpdateManyArgs> = z.object({ data: dictAdvTypeUpdateManyMutationInputObjectSchema, where: dictAdvTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeUpdateManyArgs>;

export const dictAdvTypeUpdateManyZodSchema = z.object({ data: dictAdvTypeUpdateManyMutationInputObjectSchema, where: dictAdvTypeWhereInputObjectSchema.optional() }).strict();