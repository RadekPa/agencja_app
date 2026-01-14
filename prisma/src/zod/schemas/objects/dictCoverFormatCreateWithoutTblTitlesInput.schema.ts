import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CoverFormatDesc: z.string().max(30)
}).strict();
export const dictCoverFormatCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictCoverFormatCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatCreateWithoutTblTitlesInput>;
export const dictCoverFormatCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
