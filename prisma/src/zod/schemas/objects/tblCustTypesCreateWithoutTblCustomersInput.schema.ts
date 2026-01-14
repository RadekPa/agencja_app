import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesCreateNestedOneWithoutTblCustTypesInputObjectSchema as dictCustTypesCreateNestedOneWithoutTblCustTypesInputObjectSchema } from './dictCustTypesCreateNestedOneWithoutTblCustTypesInput.schema'

const makeSchema = () => z.object({
  dictCustTypes: z.lazy(() => dictCustTypesCreateNestedOneWithoutTblCustTypesInputObjectSchema)
}).strict();
export const tblCustTypesCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateWithoutTblCustomersInput>;
export const tblCustTypesCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
