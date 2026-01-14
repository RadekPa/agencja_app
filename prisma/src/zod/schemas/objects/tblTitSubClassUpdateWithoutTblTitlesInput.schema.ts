import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema as dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema } from './dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  dictTitSubClass: z.lazy(() => dictTitSubClassUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const tblTitSubClassUpdateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUpdateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUpdateWithoutTblTitlesInput>;
export const tblTitSubClassUpdateWithoutTblTitlesInputObjectZodSchema = makeSchema();
