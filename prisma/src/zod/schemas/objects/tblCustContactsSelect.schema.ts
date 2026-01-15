import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersArgsObjectSchema as tblCustomersArgsObjectSchema } from './tblCustomersArgs.schema';
import { ContactArgsObjectSchema as ContactArgsObjectSchema } from './ContactArgs.schema'

const makeSchema = () => z.object({
  ContactID: z.boolean().optional(),
  CustID: z.boolean().optional(),
  DefaultContact: z.boolean().optional(),
  TypeOfContact: z.boolean().optional(),
  Phone: z.boolean().optional(),
  CellPhone: z.boolean().optional(),
  Fax: z.boolean().optional(),
  Email: z.boolean().optional(),
  IsSameAsClient: z.boolean().optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersArgsObjectSchema)]).optional(),
  contact: z.union([z.boolean(), z.lazy(() => ContactArgsObjectSchema)]).optional()
}).strict();
export const tblCustContactsSelectObjectSchema: z.ZodType<Prisma.tblCustContactsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsSelect>;
export const tblCustContactsSelectObjectZodSchema = makeSchema();
