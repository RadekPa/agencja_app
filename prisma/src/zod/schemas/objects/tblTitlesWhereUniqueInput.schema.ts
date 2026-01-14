import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.number().int().optional()
}).strict();
export const tblTitlesWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblTitlesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesWhereUniqueInput>;
export const tblTitlesWhereUniqueInputObjectZodSchema = makeSchema();
