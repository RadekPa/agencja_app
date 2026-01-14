import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatSelectObjectSchema as tblPdoxInvMatSelectObjectSchema } from './objects/tblPdoxInvMatSelect.schema';
import { tblPdoxInvMatWhereUniqueInputObjectSchema as tblPdoxInvMatWhereUniqueInputObjectSchema } from './objects/tblPdoxInvMatWhereUniqueInput.schema';

export const tblPdoxInvMatDeleteOneSchema: z.ZodType<Prisma.tblPdoxInvMatDeleteArgs> = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  where: tblPdoxInvMatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatDeleteArgs>;

export const tblPdoxInvMatDeleteOneZodSchema = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  where: tblPdoxInvMatWhereUniqueInputObjectSchema }).strict();