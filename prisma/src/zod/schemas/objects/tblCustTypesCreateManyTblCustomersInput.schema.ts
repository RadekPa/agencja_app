import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustTypeID: z.number().int()
}).strict();
export const tblCustTypesCreateManyTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesCreateManyTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateManyTblCustomersInput>;
export const tblCustTypesCreateManyTblCustomersInputObjectZodSchema = makeSchema();
