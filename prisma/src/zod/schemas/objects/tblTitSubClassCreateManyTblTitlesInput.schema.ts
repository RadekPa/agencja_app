import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.string().max(5)
}).strict();
export const tblTitSubClassCreateManyTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateManyTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateManyTblTitlesInput>;
export const tblTitSubClassCreateManyTblTitlesInputObjectZodSchema = makeSchema();
