import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCountOutputTypeCountTblCustContactsArgsObjectSchema as ContactCountOutputTypeCountTblCustContactsArgsObjectSchema } from './ContactCountOutputTypeCountTblCustContactsArgs.schema'

const makeSchema = () => z.object({
  tblCustContacts: z.union([z.boolean(), z.lazy(() => ContactCountOutputTypeCountTblCustContactsArgsObjectSchema)]).optional()
}).strict();
export const ContactCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ContactCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ContactCountOutputTypeSelect>;
export const ContactCountOutputTypeSelectObjectZodSchema = makeSchema();
