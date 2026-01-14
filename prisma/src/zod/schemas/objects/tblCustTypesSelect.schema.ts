import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesArgsObjectSchema as dictCustTypesArgsObjectSchema } from './dictCustTypesArgs.schema';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema'

const makeSchema = () => z.object({
  CustID: z.boolean().optional(),
  CustTypeID: z.boolean().optional(),
  dictCustTypes: z.union([z.boolean(), z.lazy(() => dictCustTypesArgsObjectSchema)]).optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional()
}).strict();
export const tblCustTypesSelectObjectSchema: z.ZodType<Prisma.tblCustTypesSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesSelect>;
export const tblCustTypesSelectObjectZodSchema = makeSchema();
