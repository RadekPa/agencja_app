import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatUpdateManyMutationInputObjectSchema as tblPdoxInvMatUpdateManyMutationInputObjectSchema } from './objects/tblPdoxInvMatUpdateManyMutationInput.schema';
import { tblPdoxInvMatWhereInputObjectSchema as tblPdoxInvMatWhereInputObjectSchema } from './objects/tblPdoxInvMatWhereInput.schema';

export const tblPdoxInvMatUpdateManySchema: z.ZodType<Prisma.tblPdoxInvMatUpdateManyArgs> = z.object({ data: tblPdoxInvMatUpdateManyMutationInputObjectSchema, where: tblPdoxInvMatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatUpdateManyArgs>;

export const tblPdoxInvMatUpdateManyZodSchema = z.object({ data: tblPdoxInvMatUpdateManyMutationInputObjectSchema, where: tblPdoxInvMatWhereInputObjectSchema.optional() }).strict();