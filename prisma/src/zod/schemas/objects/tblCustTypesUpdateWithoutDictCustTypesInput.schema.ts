import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema as tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema } from './tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInput.schema'

const makeSchema = () => z.object({
  tblCustomers: z.lazy(() => tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema).optional()
}).strict();
export const tblCustTypesUpdateWithoutDictCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpdateWithoutDictCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpdateWithoutDictCustTypesInput>;
export const tblCustTypesUpdateWithoutDictCustTypesInputObjectZodSchema = makeSchema();
