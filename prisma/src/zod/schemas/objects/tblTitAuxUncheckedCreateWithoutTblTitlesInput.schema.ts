import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CopyrightLine: z.string().optional().nullable()
}).strict();
export const tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuxUncheckedCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxUncheckedCreateWithoutTblTitlesInput>;
export const tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
