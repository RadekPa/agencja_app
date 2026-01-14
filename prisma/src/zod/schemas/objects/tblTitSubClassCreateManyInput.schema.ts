import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.string().max(5),
  TitleID: z.number().int()
}).strict();
export const tblTitSubClassCreateManyInputObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateManyInput>;
export const tblTitSubClassCreateManyInputObjectZodSchema = makeSchema();
