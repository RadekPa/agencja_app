import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustTypeName: z.string().max(50),
  CustTypeDesc: z.string().max(250).optional().nullable()
}).strict();
export const dictCustTypesCreateWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.dictCustTypesCreateWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesCreateWithoutTblCustTypesInput>;
export const dictCustTypesCreateWithoutTblCustTypesInputObjectZodSchema = makeSchema();
