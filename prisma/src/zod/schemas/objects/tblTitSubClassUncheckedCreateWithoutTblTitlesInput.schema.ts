import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.string()
}).strict();
export const tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUncheckedCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUncheckedCreateWithoutTblTitlesInput>;
export const tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
