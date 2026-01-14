import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatSelectObjectSchema as tblPdoxInvMatSelectObjectSchema } from './objects/tblPdoxInvMatSelect.schema';
import { tblPdoxInvMatWhereUniqueInputObjectSchema as tblPdoxInvMatWhereUniqueInputObjectSchema } from './objects/tblPdoxInvMatWhereUniqueInput.schema';

export const tblPdoxInvMatFindUniqueOrThrowSchema: z.ZodType<Prisma.tblPdoxInvMatFindUniqueOrThrowArgs> = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  where: tblPdoxInvMatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatFindUniqueOrThrowArgs>;

export const tblPdoxInvMatFindUniqueOrThrowZodSchema = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  where: tblPdoxInvMatWhereUniqueInputObjectSchema }).strict();