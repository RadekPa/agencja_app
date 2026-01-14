import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.number().int()
}).strict();
export const tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUncheckedCreateWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUncheckedCreateWithoutDictTitSubClassInput>;
export const tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
