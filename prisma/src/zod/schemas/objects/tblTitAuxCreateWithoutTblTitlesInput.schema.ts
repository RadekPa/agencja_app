import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CopyrightLine: z.string().max(200).optional().nullable()
}).strict();
export const tblTitAuxCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuxCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxCreateWithoutTblTitlesInput>;
export const tblTitAuxCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
