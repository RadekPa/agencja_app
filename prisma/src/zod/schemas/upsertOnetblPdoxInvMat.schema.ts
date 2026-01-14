import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatSelectObjectSchema as tblPdoxInvMatSelectObjectSchema } from './objects/tblPdoxInvMatSelect.schema';
import { tblPdoxInvMatWhereUniqueInputObjectSchema as tblPdoxInvMatWhereUniqueInputObjectSchema } from './objects/tblPdoxInvMatWhereUniqueInput.schema';
import { tblPdoxInvMatCreateInputObjectSchema as tblPdoxInvMatCreateInputObjectSchema } from './objects/tblPdoxInvMatCreateInput.schema';
import { tblPdoxInvMatUncheckedCreateInputObjectSchema as tblPdoxInvMatUncheckedCreateInputObjectSchema } from './objects/tblPdoxInvMatUncheckedCreateInput.schema';
import { tblPdoxInvMatUpdateInputObjectSchema as tblPdoxInvMatUpdateInputObjectSchema } from './objects/tblPdoxInvMatUpdateInput.schema';
import { tblPdoxInvMatUncheckedUpdateInputObjectSchema as tblPdoxInvMatUncheckedUpdateInputObjectSchema } from './objects/tblPdoxInvMatUncheckedUpdateInput.schema';

export const tblPdoxInvMatUpsertOneSchema: z.ZodType<Prisma.tblPdoxInvMatUpsertArgs> = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  where: tblPdoxInvMatWhereUniqueInputObjectSchema, create: z.union([ tblPdoxInvMatCreateInputObjectSchema, tblPdoxInvMatUncheckedCreateInputObjectSchema ]), update: z.union([ tblPdoxInvMatUpdateInputObjectSchema, tblPdoxInvMatUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatUpsertArgs>;

export const tblPdoxInvMatUpsertOneZodSchema = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  where: tblPdoxInvMatWhereUniqueInputObjectSchema, create: z.union([ tblPdoxInvMatCreateInputObjectSchema, tblPdoxInvMatUncheckedCreateInputObjectSchema ]), update: z.union([ tblPdoxInvMatUpdateInputObjectSchema, tblPdoxInvMatUncheckedUpdateInputObjectSchema ]) }).strict();