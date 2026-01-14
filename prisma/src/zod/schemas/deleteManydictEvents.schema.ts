import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './objects/dictEventsWhereInput.schema';

export const dictEventsDeleteManySchema: z.ZodType<Prisma.dictEventsDeleteManyArgs> = z.object({ where: dictEventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictEventsDeleteManyArgs>;

export const dictEventsDeleteManyZodSchema = z.object({ where: dictEventsWhereInputObjectSchema.optional() }).strict();