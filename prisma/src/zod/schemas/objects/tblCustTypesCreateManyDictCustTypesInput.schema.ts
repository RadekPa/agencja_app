import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int()
}).strict();
export const tblCustTypesCreateManyDictCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustTypesCreateManyDictCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateManyDictCustTypesInput>;
export const tblCustTypesCreateManyDictCustTypesInputObjectZodSchema = makeSchema();
