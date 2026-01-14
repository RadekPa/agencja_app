import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.number().int(),
  CopyrightLine: z.string().max(200).optional().nullable()
}).strict();
export const tblTitAuxUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblTitAuxUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxUncheckedCreateInput>;
export const tblTitAuxUncheckedCreateInputObjectZodSchema = makeSchema();
