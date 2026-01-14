import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrEventsWhereInputObjectSchema as dictAgrEventsWhereInputObjectSchema } from './objects/dictAgrEventsWhereInput.schema';

export const dictAgrEventsDeleteManySchema: z.ZodType<Prisma.dictAgrEventsDeleteManyArgs> = z.object({ where: dictAgrEventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictAgrEventsDeleteManyArgs>;

export const dictAgrEventsDeleteManyZodSchema = z.object({ where: dictAgrEventsWhereInputObjectSchema.optional() }).strict();