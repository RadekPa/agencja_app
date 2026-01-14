import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Invoice_Nr: z.number().int().optional()
}).strict();
export const tblPdoxInvMatWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblPdoxInvMatWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPdoxInvMatWhereUniqueInput>;
export const tblPdoxInvMatWhereUniqueInputObjectZodSchema = makeSchema();
