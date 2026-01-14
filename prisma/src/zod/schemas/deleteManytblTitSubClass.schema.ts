import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitSubClassWhereInputObjectSchema as tblTitSubClassWhereInputObjectSchema } from './objects/tblTitSubClassWhereInput.schema';

export const tblTitSubClassDeleteManySchema: z.ZodType<Prisma.tblTitSubClassDeleteManyArgs> = z.object({ where: tblTitSubClassWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTitSubClassDeleteManyArgs>;

export const tblTitSubClassDeleteManyZodSchema = z.object({ where: tblTitSubClassWhereInputObjectSchema.optional() }).strict();