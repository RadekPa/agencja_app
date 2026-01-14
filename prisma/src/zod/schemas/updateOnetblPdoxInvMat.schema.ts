import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatSelectObjectSchema as tblPdoxInvMatSelectObjectSchema } from './objects/tblPdoxInvMatSelect.schema';
import { tblPdoxInvMatUpdateInputObjectSchema as tblPdoxInvMatUpdateInputObjectSchema } from './objects/tblPdoxInvMatUpdateInput.schema';
import { tblPdoxInvMatUncheckedUpdateInputObjectSchema as tblPdoxInvMatUncheckedUpdateInputObjectSchema } from './objects/tblPdoxInvMatUncheckedUpdateInput.schema';
import { tblPdoxInvMatWhereUniqueInputObjectSchema as tblPdoxInvMatWhereUniqueInputObjectSchema } from './objects/tblPdoxInvMatWhereUniqueInput.schema';

export const tblPdoxInvMatUpdateOneSchema: z.ZodType<Prisma.tblPdoxInvMatUpdateArgs> = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  data: z.union([tblPdoxInvMatUpdateInputObjectSchema, tblPdoxInvMatUncheckedUpdateInputObjectSchema]), where: tblPdoxInvMatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatUpdateArgs>;

export const tblPdoxInvMatUpdateOneZodSchema = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  data: z.union([tblPdoxInvMatUpdateInputObjectSchema, tblPdoxInvMatUncheckedUpdateInputObjectSchema]), where: tblPdoxInvMatWhereUniqueInputObjectSchema }).strict();