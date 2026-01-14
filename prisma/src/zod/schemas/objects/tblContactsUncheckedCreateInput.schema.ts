import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsUncheckedCreateNestedManyWithoutTblContactsInputObjectSchema as tblCustContactsUncheckedCreateNestedManyWithoutTblContactsInputObjectSchema } from './tblCustContactsUncheckedCreateNestedManyWithoutTblContactsInput.schema'

const makeSchema = () => z.object({
  ContactID: z.number().int().optional(),
  PhoneNumber: z.string().max(20).optional().nullable(),
  FirstName: z.string().max(30).optional().nullable(),
  MiddleName: z.string().max(30).optional().nullable(),
  LastName: z.string().max(50).optional().nullable(),
  Informal: z.number().int(),
  Fax: z.string().max(20).optional().nullable(),
  Email: z.string().max(50).optional().nullable(),
  UserMod: z.string().max(30).optional(),
  DateMod: z.coerce.date().optional(),
  ContactPosition: z.string().max(50).optional().nullable(),
  Accountant: z.number().int().optional().nullable(),
  tblCustContacts: z.lazy(() => tblCustContactsUncheckedCreateNestedManyWithoutTblContactsInputObjectSchema).optional()
}).strict();
export const tblContactsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblContactsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsUncheckedCreateInput>;
export const tblContactsUncheckedCreateInputObjectZodSchema = makeSchema();
