import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.number().int(),
  CopyrightLine: z.string().max(200).optional().nullable()
}).strict();
export const tblTitAuxCreateManyInputObjectSchema: z.ZodType<Prisma.tblTitAuxCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxCreateManyInput>;
export const tblTitAuxCreateManyInputObjectZodSchema = makeSchema();
