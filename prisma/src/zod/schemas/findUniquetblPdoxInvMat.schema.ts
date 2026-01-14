import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPdoxInvMatSelectObjectSchema as tblPdoxInvMatSelectObjectSchema } from './objects/tblPdoxInvMatSelect.schema';
import { tblPdoxInvMatWhereUniqueInputObjectSchema as tblPdoxInvMatWhereUniqueInputObjectSchema } from './objects/tblPdoxInvMatWhereUniqueInput.schema';

export const tblPdoxInvMatFindUniqueSchema: z.ZodType<Prisma.tblPdoxInvMatFindUniqueArgs> = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  where: tblPdoxInvMatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPdoxInvMatFindUniqueArgs>;

export const tblPdoxInvMatFindUniqueZodSchema = z.object({ select: tblPdoxInvMatSelectObjectSchema.optional(),  where: tblPdoxInvMatWhereUniqueInputObjectSchema }).strict();