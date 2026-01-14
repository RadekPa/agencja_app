import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  FVNr: z.number().int(),
  FVDate: z.date()
}).strict();
export const tblFraVAT_NewFVNrFVDateCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblFraVAT_NewFVNrFVDateCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblFraVAT_NewFVNrFVDateCompoundUniqueInput>;
export const tblFraVAT_NewFVNrFVDateCompoundUniqueInputObjectZodSchema = makeSchema();
