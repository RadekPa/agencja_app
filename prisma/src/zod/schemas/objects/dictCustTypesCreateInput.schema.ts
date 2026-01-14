import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesCreateNestedManyWithoutDictCustTypesInputObjectSchema as tblCustTypesCreateNestedManyWithoutDictCustTypesInputObjectSchema } from './tblCustTypesCreateNestedManyWithoutDictCustTypesInput.schema'

const makeSchema = () => z.object({
  CustTypeName: z.string().max(50),
  CustTypeDesc: z.string().max(250).optional().nullable(),
  tblCustTypes: z.lazy(() => tblCustTypesCreateNestedManyWithoutDictCustTypesInputObjectSchema).optional()
}).strict();
export const dictCustTypesCreateInputObjectSchema: z.ZodType<Prisma.dictCustTypesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesCreateInput>;
export const dictCustTypesCreateInputObjectZodSchema = makeSchema();
