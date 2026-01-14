import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema as dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema } from './dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInput.schema';
import { tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema as tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema } from './tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInput.schema'

const makeSchema = () => z.object({
  dictCustTypes: z.lazy(() => dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema).optional()
}).strict();
export const tblCustTypesUpdateInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpdateInput>;
export const tblCustTypesUpdateInputObjectZodSchema = makeSchema();
