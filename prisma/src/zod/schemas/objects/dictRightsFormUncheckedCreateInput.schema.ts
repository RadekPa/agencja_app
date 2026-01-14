import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsUncheckedCreateNestedManyWithoutDictRightsFormInputObjectSchema as tblAgrRightsUncheckedCreateNestedManyWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsUncheckedCreateNestedManyWithoutDictRightsFormInput.schema'

const makeSchema = () => z.object({
  RightFormID: z.number().int().optional(),
  RightFormDesc: z.string().max(50),
  RightFormPL: z.string().max(100).optional().nullable(),
  RightFormAbbPL: z.string().max(10).optional().nullable(),
  RightFormAbbEN: z.string().max(10).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedCreateNestedManyWithoutDictRightsFormInputObjectSchema).optional()
}).strict();
export const dictRightsFormUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictRightsFormUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormUncheckedCreateInput>;
export const dictRightsFormUncheckedCreateInputObjectZodSchema = makeSchema();
