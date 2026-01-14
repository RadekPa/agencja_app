import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArDefaultAccountWhereInputObjectSchema as ArDefaultAccountWhereInputObjectSchema } from './objects/ArDefaultAccountWhereInput.schema';

export const ArDefaultAccountDeleteManySchema: z.ZodType<Prisma.ArDefaultAccountDeleteManyArgs> = z.object({ where: ArDefaultAccountWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountDeleteManyArgs>;

export const ArDefaultAccountDeleteManyZodSchema = z.object({ where: ArDefaultAccountWhereInputObjectSchema.optional() }).strict();