import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.number().int().optional()
}).strict();
export const tblTitAuxWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblTitAuxWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxWhereUniqueInput>;
export const tblTitAuxWhereUniqueInputObjectZodSchema = makeSchema();
