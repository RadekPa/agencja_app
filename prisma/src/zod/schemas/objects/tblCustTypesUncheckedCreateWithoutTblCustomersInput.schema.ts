import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustTypeID: z.number().int()
}).strict();
export const tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesUncheckedCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUncheckedCreateWithoutTblCustomersInput>;
export const tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
