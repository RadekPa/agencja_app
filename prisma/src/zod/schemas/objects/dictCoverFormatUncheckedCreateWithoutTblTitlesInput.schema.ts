import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CoverFormatID: z.number().int().optional(),
  CoverFormatDesc: z.string()
}).strict();
export const dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictCoverFormatUncheckedCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatUncheckedCreateWithoutTblTitlesInput>;
export const dictCoverFormatUncheckedCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
