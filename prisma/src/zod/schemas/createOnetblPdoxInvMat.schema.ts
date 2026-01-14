import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatSelectObjectSchema as tblPdoxInvMatSelectObjectSchema } from './objects/tblPdoxInvMatSelect.schema';
import { tblPdoxInvMatCreateInputObjectSchema as tblPdoxInvMatCreateInputObjectSchema } from './objects/tblPdoxInvMatCreateInput.schema';
import { tblPdoxInvMatUncheckedCreateInputObjectSchema as tblPdoxInvMatUncheckedCreateInputObjectSchema } from './objects/tblPdoxInvMatUncheckedCreateInput.schema';

export const tblPdoxInvMatCreateOneSchema: z.ZodType<Prisma.tblPdoxInvMatCreateArgs> = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  data: z.union([tblPdoxInvMatCreateInputObjectSchema, tblPdoxInvMatUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatCreateArgs>;

export const tblPdoxInvMatCreateOneZodSchema = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  data: z.union([tblPdoxInvMatCreateInputObjectSchema, tblPdoxInvMatUncheckedCreateInputObjectSchema]) }).strict();