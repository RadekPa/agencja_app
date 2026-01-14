import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountWhereInputObjectSchema as ArAccountWhereInputObjectSchema } from './objects/ArAccountWhereInput.schema';

export const ArAccountDeleteManySchema: z.ZodType<Prisma.ArAccountDeleteManyArgs> = z.object({ where: ArAccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArAccountDeleteManyArgs>;

export const ArAccountDeleteManyZodSchema = z.object({ where: ArAccountWhereInputObjectSchema.optional() }).strict();