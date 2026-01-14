import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsCreateNestedManyWithoutTblContactsInputObjectSchema as tblCustContactsCreateNestedManyWithoutTblContactsInputObjectSchema } from './tblCustContactsCreateNestedManyWithoutTblContactsInput.schema'

const makeSchema = () => z.object({
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
  tblCustContacts: z.lazy(() => tblCustContactsCreateNestedManyWithoutTblContactsInputObjectSchema).optional()
}).strict();
export const tblContactsCreateInputObjectSchema: z.ZodType<Prisma.tblContactsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsCreateInput>;
export const tblContactsCreateInputObjectZodSchema = makeSchema();
