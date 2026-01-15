import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  phoneNumber: z.string().max(20).optional().nullable(),
  firstName: z.string().max(30).optional().nullable(),
  middleName: z.string().max(30).optional().nullable(),
  lastName: z.string().max(50).optional().nullable(),
  informal: z.number().int(),
  fax: z.string().max(20).optional().nullable(),
  email: z.string().max(50).optional().nullable(),
  userMod: z.string().max(30).optional(),
  dateMod: z.coerce.date().optional(),
  contactPosition: z.string().max(50).optional().nullable(),
  accountant: z.number().int().optional().nullable()
}).strict();
export const ContactCreateWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.ContactCreateWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateWithoutTblCustContactsInput>;
export const ContactCreateWithoutTblCustContactsInputObjectZodSchema = makeSchema();
