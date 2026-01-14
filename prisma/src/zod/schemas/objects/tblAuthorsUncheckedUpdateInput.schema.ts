import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsNestedInputObjectSchema as tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsNestedInputObjectSchema } from './tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsNestedInput.schema'

const makeSchema = () => z.object({
  AuthorID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  FullName: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  FirstName: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  MiddleName: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  LastName: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Suffix: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PenName: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  UserMod: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  DateMod: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Remarks: z.union([z.string().max(1000), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblTitAuthors: z.lazy(() => tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsNestedInputObjectSchema).optional()
}).strict();
export const tblAuthorsUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.tblAuthorsUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsUncheckedUpdateInput>;
export const tblAuthorsUncheckedUpdateInputObjectZodSchema = makeSchema();
