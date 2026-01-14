import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.string().max(5),
  TitleID: z.number().int()
}).strict();
export const tblTitSubClassUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUncheckedCreateInput>;
export const tblTitSubClassUncheckedCreateInputObjectZodSchema = makeSchema();
