import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { tblCustomersUpdateOneRequiredWithoutTblCustContactsNestedInputObjectSchema as tblCustomersUpdateOneRequiredWithoutTblCustContactsNestedInputObjectSchema } from './tblCustomersUpdateOneRequiredWithoutTblCustContactsNestedInput.schema'

const makeSchema = () => z.object({
  DefaultContact: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  TypeOfContact: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  Phone: z.union([z.string().max(20), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CellPhone: z.union([z.string().max(20), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Fax: z.union([z.string().max(20), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Email: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  IsSameAsClient: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneRequiredWithoutTblCustContactsNestedInputObjectSchema).optional()
}).strict();
export const tblCustContactsUpdateWithoutTblContactsInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpdateWithoutTblContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpdateWithoutTblContactsInput>;
export const tblCustContactsUpdateWithoutTblContactsInputObjectZodSchema = makeSchema();
