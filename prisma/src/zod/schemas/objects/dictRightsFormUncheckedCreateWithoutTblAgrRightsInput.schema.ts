import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RightFormID: z.number().int().optional(),
  RightFormDesc: z.string(),
  RightFormPL: z.string().optional().nullable(),
  RightFormAbbPL: z.string().optional().nullable(),
  RightFormAbbEN: z.string().optional().nullable()
}).strict();
export const dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRightsFormUncheckedCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormUncheckedCreateWithoutTblAgrRightsInput>;
export const dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
