import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema as tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema } from './tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  tblTitles: z.lazy(() => tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const tblTitSubClassUpdateWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUpdateWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUpdateWithoutDictTitSubClassInput>;
export const tblTitSubClassUpdateWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
