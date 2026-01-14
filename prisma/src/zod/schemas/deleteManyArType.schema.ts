import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeWhereInputObjectSchema as ArTypeWhereInputObjectSchema } from './objects/ArTypeWhereInput.schema';

export const ArTypeDeleteManySchema: z.ZodType<Prisma.ArTypeDeleteManyArgs> = z.object({ where: ArTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTypeDeleteManyArgs>;

export const ArTypeDeleteManyZodSchema = z.object({ where: ArTypeWhereInputObjectSchema.optional() }).strict();