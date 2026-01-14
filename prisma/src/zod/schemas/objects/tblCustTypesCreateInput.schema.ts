import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesCreateNestedOneWithoutTblCustTypesInputObjectSchema as dictCustTypesCreateNestedOneWithoutTblCustTypesInputObjectSchema } from './dictCustTypesCreateNestedOneWithoutTblCustTypesInput.schema';
import { tblCustomersCreateNestedOneWithoutTblCustTypesInputObjectSchema as tblCustomersCreateNestedOneWithoutTblCustTypesInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblCustTypesInput.schema'

const makeSchema = () => z.object({
  dictCustTypes: z.lazy(() => dictCustTypesCreateNestedOneWithoutTblCustTypesInputObjectSchema),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblCustTypesInputObjectSchema)
}).strict();
export const tblCustTypesCreateInputObjectSchema: z.ZodType<Prisma.tblCustTypesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateInput>;
export const tblCustTypesCreateInputObjectZodSchema = makeSchema();
