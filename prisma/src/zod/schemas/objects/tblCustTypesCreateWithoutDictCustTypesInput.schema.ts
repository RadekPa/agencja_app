import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateNestedOneWithoutTblCustTypesInputObjectSchema as tblCustomersCreateNestedOneWithoutTblCustTypesInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblCustTypesInput.schema'

const makeSchema = () => z.object({
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblCustTypesInputObjectSchema)
}).strict();
export const tblCustTypesCreateWithoutDictCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustTypesCreateWithoutDictCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateWithoutDictCustTypesInput>;
export const tblCustTypesCreateWithoutDictCustTypesInputObjectZodSchema = makeSchema();
