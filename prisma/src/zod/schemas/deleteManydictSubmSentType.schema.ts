import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictSubmSentTypeWhereInputObjectSchema as dictSubmSentTypeWhereInputObjectSchema } from './objects/dictSubmSentTypeWhereInput.schema';

export const dictSubmSentTypeDeleteManySchema: z.ZodType<Prisma.dictSubmSentTypeDeleteManyArgs> = z.object({ where: dictSubmSentTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictSubmSentTypeDeleteManyArgs>;

export const dictSubmSentTypeDeleteManyZodSchema = z.object({ where: dictSubmSentTypeWhereInputObjectSchema.optional() }).strict();