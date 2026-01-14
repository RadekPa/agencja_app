import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgrEventsWhereInputObjectSchema as tblAgrEventsWhereInputObjectSchema } from './objects/tblAgrEventsWhereInput.schema';

export const tblAgrEventsDeleteManySchema: z.ZodType<Prisma.tblAgrEventsDeleteManyArgs> = z.object({ where: tblAgrEventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblAgrEventsDeleteManyArgs>;

export const tblAgrEventsDeleteManyZodSchema = z.object({ where: tblAgrEventsWhereInputObjectSchema.optional() }).strict();