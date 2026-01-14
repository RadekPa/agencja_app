import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyTypeWhereInputObjectSchema as dictRoyTypeWhereInputObjectSchema } from './objects/dictRoyTypeWhereInput.schema';

export const dictRoyTypeDeleteManySchema: z.ZodType<Prisma.dictRoyTypeDeleteManyArgs> = z.object({ where: dictRoyTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeDeleteManyArgs>;

export const dictRoyTypeDeleteManyZodSchema = z.object({ where: dictRoyTypeWhereInputObjectSchema.optional() }).strict();