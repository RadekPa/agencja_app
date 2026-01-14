import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArApplyWhereInputObjectSchema as ArApplyWhereInputObjectSchema } from './objects/ArApplyWhereInput.schema';

export const ArApplyDeleteManySchema: z.ZodType<Prisma.ArApplyDeleteManyArgs> = z.object({ where: ArApplyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArApplyDeleteManyArgs>;

export const ArApplyDeleteManyZodSchema = z.object({ where: ArApplyWhereInputObjectSchema.optional() }).strict();