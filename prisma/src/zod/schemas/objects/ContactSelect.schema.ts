import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsFindManySchema as tblCustContactsFindManySchema } from '../findManytblCustContacts.schema';
import { ContactCountOutputTypeArgsObjectSchema as ContactCountOutputTypeArgsObjectSchema } from './ContactCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  phoneNumber: z.boolean().optional(),
  firstName: z.boolean().optional(),
  middleName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  informal: z.boolean().optional(),
  fax: z.boolean().optional(),
  email: z.boolean().optional(),
  userMod: z.boolean().optional(),
  dateMod: z.boolean().optional(),
  contactPosition: z.boolean().optional(),
  accountant: z.boolean().optional(),
  tblCustContacts: z.union([z.boolean(), z.lazy(() => tblCustContactsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ContactCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ContactSelectObjectSchema: z.ZodType<Prisma.ContactSelect> = makeSchema() as unknown as z.ZodType<Prisma.ContactSelect>;
export const ContactSelectObjectZodSchema = makeSchema();
