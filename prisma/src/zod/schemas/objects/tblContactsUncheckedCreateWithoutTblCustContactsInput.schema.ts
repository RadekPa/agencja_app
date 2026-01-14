import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContactID: z.number().int().optional(),
  PhoneNumber: z.string().optional().nullable(),
  FirstName: z.string().optional().nullable(),
  MiddleName: z.string().optional().nullable(),
  LastName: z.string().optional().nullable(),
  Informal: z.number().int(),
  Fax: z.string().optional().nullable(),
  Email: z.string().optional().nullable(),
  UserMod: z.string().optional(),
  DateMod: z.coerce.date().optional(),
  ContactPosition: z.string().optional().nullable(),
  Accountant: z.number().int().optional().nullable()
}).strict();
export const tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.tblContactsUncheckedCreateWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsUncheckedCreateWithoutTblCustContactsInput>;
export const tblContactsUncheckedCreateWithoutTblCustContactsInputObjectZodSchema = makeSchema();
