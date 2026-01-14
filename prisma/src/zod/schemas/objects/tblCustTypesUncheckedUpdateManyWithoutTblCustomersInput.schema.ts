import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CustTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblCustTypesUncheckedUpdateManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesUncheckedUpdateManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUncheckedUpdateManyWithoutTblCustomersInput>;
export const tblCustTypesUncheckedUpdateManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
