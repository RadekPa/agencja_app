import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCustTypesArgsObjectSchema as dictCustTypesArgsObjectSchema } from './dictCustTypesArgs.schema';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema'

const makeSchema = () => z.object({
  dictCustTypes: z.union([z.boolean(), z.lazy(() => dictCustTypesArgsObjectSchema)]).optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional()
}).strict();
export const tblCustTypesIncludeObjectSchema: z.ZodType<Prisma.tblCustTypesInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesInclude>;
export const tblCustTypesIncludeObjectZodSchema = makeSchema();
