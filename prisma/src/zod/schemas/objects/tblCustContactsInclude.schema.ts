import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema';
import { ContactArgsObjectSchema as ContactArgsObjectSchema } from './ContactArgs.schema'

const makeSchema = () => z.object({
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional(),
  contact: z.union([z.boolean(), z.lazy(() => ContactArgsObjectSchema)]).optional()
}).strict();
export const tblCustContactsIncludeObjectSchema: z.ZodType<Prisma.tblCustContactsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsInclude>;
export const tblCustContactsIncludeObjectZodSchema = makeSchema();
