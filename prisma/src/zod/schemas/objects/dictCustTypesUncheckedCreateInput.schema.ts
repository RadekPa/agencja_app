import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesUncheckedCreateNestedManyWithoutDictCustTypesInputObjectSchema as tblCustTypesUncheckedCreateNestedManyWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUncheckedCreateNestedManyWithoutDictCustTypesInput.schema'

const makeSchema = () => z.object({
  CustTypeID: z.number().int().optional(),
  CustTypeName: z.string().max(50),
  CustTypeDesc: z.string().max(250).optional().nullable(),
  tblCustTypes: z.lazy(() => tblCustTypesUncheckedCreateNestedManyWithoutDictCustTypesInputObjectSchema).optional()
}).strict();
export const dictCustTypesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictCustTypesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesUncheckedCreateInput>;
export const dictCustTypesUncheckedCreateInputObjectZodSchema = makeSchema();
