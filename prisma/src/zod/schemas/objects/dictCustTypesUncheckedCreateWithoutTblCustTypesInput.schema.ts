import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustTypeID: z.number().int().optional(),
  CustTypeName: z.string(),
  CustTypeDesc: z.string().optional().nullable()
}).strict();
export const dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.dictCustTypesUncheckedCreateWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesUncheckedCreateWithoutTblCustTypesInput>;
export const dictCustTypesUncheckedCreateWithoutTblCustTypesInputObjectZodSchema = makeSchema();
