import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Invoice_Nr: z.boolean().optional(),
  Title: z.boolean().optional(),
  ISBN: z.boolean().optional()
}).strict();
export const tblPdoxInvMatSelectObjectSchema: z.ZodType<Prisma.tblPdoxInvMatSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatSelect>;
export const tblPdoxInvMatSelectObjectZodSchema = makeSchema();
