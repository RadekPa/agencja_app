import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuxWhereInputObjectSchema as tblTitAuxWhereInputObjectSchema } from './objects/tblTitAuxWhereInput.schema';

export const tblTitAuxDeleteManySchema: z.ZodType<Prisma.tblTitAuxDeleteManyArgs> = z.object({ where: tblTitAuxWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTitAuxDeleteManyArgs>;

export const tblTitAuxDeleteManyZodSchema = z.object({ where: tblTitAuxWhereInputObjectSchema.optional() }).strict();