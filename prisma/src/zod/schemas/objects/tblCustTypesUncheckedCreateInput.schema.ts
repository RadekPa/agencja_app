import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int(),
  CustTypeID: z.number().int()
}).strict();
export const tblCustTypesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblCustTypesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUncheckedCreateInput>;
export const tblCustTypesUncheckedCreateInputObjectZodSchema = makeSchema();
