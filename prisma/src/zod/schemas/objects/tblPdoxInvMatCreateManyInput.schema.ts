import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Invoice_Nr: z.number().int(),
  Title: z.string().max(150).optional().nullable(),
  ISBN: z.string().max(16).optional().nullable()
}).strict();
export const tblPdoxInvMatCreateManyInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatCreateManyInput>;
export const tblPdoxInvMatCreateManyInputObjectZodSchema = makeSchema();
