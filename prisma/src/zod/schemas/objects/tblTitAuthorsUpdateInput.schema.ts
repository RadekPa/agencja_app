import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { tblAuthorsUpdateOneRequiredWithoutTblTitAuthorsNestedInputObjectSchema as tblAuthorsUpdateOneRequiredWithoutTblTitAuthorsNestedInputObjectSchema } from './tblAuthorsUpdateOneRequiredWithoutTblTitAuthorsNestedInput.schema';
import { tblTitlesUpdateOneRequiredWithoutTblTitAuthorsNestedInputObjectSchema as tblTitlesUpdateOneRequiredWithoutTblTitAuthorsNestedInputObjectSchema } from './tblTitlesUpdateOneRequiredWithoutTblTitAuthorsNestedInput.schema'

const makeSchema = () => z.object({
  Main: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Lp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblAuthors: z.lazy(() => tblAuthorsUpdateOneRequiredWithoutTblTitAuthorsNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUpdateOneRequiredWithoutTblTitAuthorsNestedInputObjectSchema).optional()
}).strict();
export const tblTitAuthorsUpdateInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUpdateInput>;
export const tblTitAuthorsUpdateInputObjectZodSchema = makeSchema();
