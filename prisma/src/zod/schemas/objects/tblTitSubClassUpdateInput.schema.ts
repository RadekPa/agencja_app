import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema as tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema } from './tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInput.schema';
import { dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema as dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema } from './dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  tblTitles: z.lazy(() => tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema).optional(),
  dictTitSubClass: z.lazy(() => dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const tblTitSubClassUpdateInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUpdateInput>;
export const tblTitSubClassUpdateInputObjectZodSchema = makeSchema();
