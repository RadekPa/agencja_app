import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './objects/dictCopyTypeWhereInput.schema';

export const dictCopyTypeDeleteManySchema: z.ZodType<Prisma.dictCopyTypeDeleteManyArgs> = z.object({ where: dictCopyTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeDeleteManyArgs>;

export const dictCopyTypeDeleteManyZodSchema = z.object({ where: dictCopyTypeWhereInputObjectSchema.optional() }).strict();