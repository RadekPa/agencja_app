import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatWhereInputObjectSchema as tblPdoxInvMatWhereInputObjectSchema } from './objects/tblPdoxInvMatWhereInput.schema';

export const tblPdoxInvMatDeleteManySchema: z.ZodType<Prisma.tblPdoxInvMatDeleteManyArgs> = z.object({ where: tblPdoxInvMatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatDeleteManyArgs>;

export const tblPdoxInvMatDeleteManyZodSchema = z.object({ where: tblPdoxInvMatWhereInputObjectSchema.optional() }).strict();