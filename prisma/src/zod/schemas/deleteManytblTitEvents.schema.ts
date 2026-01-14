import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitEventsWhereInputObjectSchema as tblTitEventsWhereInputObjectSchema } from './objects/tblTitEventsWhereInput.schema';

export const tblTitEventsDeleteManySchema: z.ZodType<Prisma.tblTitEventsDeleteManyArgs> = z.object({ where: tblTitEventsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTitEventsDeleteManyArgs>;

export const tblTitEventsDeleteManyZodSchema = z.object({ where: tblTitEventsWhereInputObjectSchema.optional() }).strict();