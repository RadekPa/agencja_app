import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblSubmEventsWhereInputObjectSchema as tblSubmEventsWhereInputObjectSchema } from './objects/tblSubmEventsWhereInput.schema';

export const tblSubmEventsDeleteManySchema: z.ZodType<Prisma.tblSubmEventsDeleteManyArgs> = z.object({ where: tblSubmEventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblSubmEventsDeleteManyArgs>;

export const tblSubmEventsDeleteManyZodSchema = z.object({ where: tblSubmEventsWhereInputObjectSchema.optional() }).strict();