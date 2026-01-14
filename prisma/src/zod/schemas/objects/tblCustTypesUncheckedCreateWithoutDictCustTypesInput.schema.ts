import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int()
}).strict();
export const tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustTypesUncheckedCreateWithoutDictCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUncheckedCreateWithoutDictCustTypesInput>;
export const tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectZodSchema = makeSchema();
