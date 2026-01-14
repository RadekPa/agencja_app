import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { lkpPayTypeWhereInputObjectSchema as lkpPayTypeWhereInputObjectSchema } from './objects/lkpPayTypeWhereInput.schema';

export const lkpPayTypeDeleteManySchema: z.ZodType<Prisma.lkpPayTypeDeleteManyArgs> = z.object({ where: lkpPayTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeDeleteManyArgs>;

export const lkpPayTypeDeleteManyZodSchema = z.object({ where: lkpPayTypeWhereInputObjectSchema.optional() }).strict();