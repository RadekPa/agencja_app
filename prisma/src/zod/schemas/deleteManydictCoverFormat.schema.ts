import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCoverFormatWhereInputObjectSchema as dictCoverFormatWhereInputObjectSchema } from './objects/dictCoverFormatWhereInput.schema';

export const dictCoverFormatDeleteManySchema: z.ZodType<Prisma.dictCoverFormatDeleteManyArgs> = z.object({ where: dictCoverFormatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCoverFormatDeleteManyArgs>;

export const dictCoverFormatDeleteManyZodSchema = z.object({ where: dictCoverFormatWhereInputObjectSchema.optional() }).strict();