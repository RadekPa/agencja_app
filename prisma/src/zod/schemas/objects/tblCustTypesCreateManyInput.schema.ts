import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int(),
  CustTypeID: z.number().int()
}).strict();
export const tblCustTypesCreateManyInputObjectSchema: z.ZodType<Prisma.tblCustTypesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateManyInput>;
export const tblCustTypesCreateManyInputObjectZodSchema = makeSchema();
