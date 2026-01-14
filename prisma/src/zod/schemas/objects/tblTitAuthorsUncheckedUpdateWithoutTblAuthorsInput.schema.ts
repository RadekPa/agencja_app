import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  TitleID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  Main: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Lp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInput>;
export const tblTitAuthorsUncheckedUpdateWithoutTblAuthorsInputObjectZodSchema = makeSchema();
