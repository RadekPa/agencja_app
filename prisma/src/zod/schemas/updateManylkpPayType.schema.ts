import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { lkpPayTypeUpdateManyMutationInputObjectSchema as lkpPayTypeUpdateManyMutationInputObjectSchema } from './objects/lkpPayTypeUpdateManyMutationInput.schema';
import { lkpPayTypeWhereInputObjectSchema as lkpPayTypeWhereInputObjectSchema } from './objects/lkpPayTypeWhereInput.schema';

export const lkpPayTypeUpdateManySchema: z.ZodType<Prisma.lkpPayTypeUpdateManyArgs> = z.object({ data: lkpPayTypeUpdateManyMutationInputObjectSchema, where: lkpPayTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeUpdateManyArgs>;

export const lkpPayTypeUpdateManyZodSchema = z.object({ data: lkpPayTypeUpdateManyMutationInputObjectSchema, where: lkpPayTypeWhereInputObjectSchema.optional() }).strict();