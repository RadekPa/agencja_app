import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CustTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblCustTypesUncheckedUpdateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesUncheckedUpdateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUncheckedUpdateWithoutTblCustomersInput>;
export const tblCustTypesUncheckedUpdateWithoutTblCustomersInputObjectZodSchema = makeSchema();
