import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubLocalWhereInputObjectSchema as tblPubLocalWhereInputObjectSchema } from './objects/tblPubLocalWhereInput.schema';

export const tblPubLocalDeleteManySchema: z.ZodType<Prisma.tblPubLocalDeleteManyArgs> = z.object({ where: tblPubLocalWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPubLocalDeleteManyArgs>;

export const tblPubLocalDeleteManyZodSchema = z.object({ where: tblPubLocalWhereInputObjectSchema.optional() }).strict();