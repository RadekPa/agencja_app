import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema as dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema } from './dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInput.schema'

const makeSchema = () => z.object({
  dictCustTypes: z.lazy(() => dictCustTypesUpdateOneRequiredWithoutTblCustTypesNestedInputObjectSchema).optional()
}).strict();
export const tblCustTypesUpdateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpdateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpdateWithoutTblCustomersInput>;
export const tblCustTypesUpdateWithoutTblCustomersInputObjectZodSchema = makeSchema();
