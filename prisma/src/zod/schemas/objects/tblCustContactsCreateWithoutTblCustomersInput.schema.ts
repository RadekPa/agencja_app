import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateNestedOneWithoutTblCustContactsInputObjectSchema as ContactCreateNestedOneWithoutTblCustContactsInputObjectSchema } from './ContactCreateNestedOneWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  DefaultContact: z.number().int(),
  TypeOfContact: z.number().int(),
  Phone: z.string().max(20).optional().nullable(),
  CellPhone: z.string().max(20).optional().nullable(),
  Fax: z.string().max(20).optional().nullable(),
  Email: z.string().max(50).optional().nullable(),
  IsSameAsClient: z.boolean().optional().nullable(),
  contact: z.lazy(() => ContactCreateNestedOneWithoutTblCustContactsInputObjectSchema)
}).strict();
export const tblCustContactsCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustContactsCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateWithoutTblCustomersInput>;
export const tblCustContactsCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
