import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  phoneNumber: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  middleName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  informal: z.number().int(),
  fax: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  userMod: z.string().optional(),
  dateMod: z.coerce.date().optional(),
  contactPosition: z.string().optional().nullable(),
  accountant: z.number().int().optional().nullable()
}).strict();
export const ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.ContactUncheckedCreateWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUncheckedCreateWithoutTblCustContactsInput>;
export const ContactUncheckedCreateWithoutTblCustContactsInputObjectZodSchema = makeSchema();
