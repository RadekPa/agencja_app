import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateNestedManyWithoutDictRightsFormInputObjectSchema as tblAgrRightsCreateNestedManyWithoutDictRightsFormInputObjectSchema } from './tblAgrRightsCreateNestedManyWithoutDictRightsFormInput.schema'

const makeSchema = () => z.object({
  RightFormDesc: z.string().max(50),
  RightFormPL: z.string().max(100).optional().nullable(),
  RightFormAbbPL: z.string().max(10).optional().nullable(),
  RightFormAbbEN: z.string().max(10).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsCreateNestedManyWithoutDictRightsFormInputObjectSchema).optional()
}).strict();
export const dictRightsFormCreateInputObjectSchema: z.ZodType<Prisma.dictRightsFormCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormCreateInput>;
export const dictRightsFormCreateInputObjectZodSchema = makeSchema();
