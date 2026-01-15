import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateNestedOneWithoutTblCustContactsInputObjectSchema as tblCustomersCreateNestedOneWithoutTblCustContactsInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  DefaultContact: z.number().int(),
  TypeOfContact: z.number().int(),
  Phone: z.string().max(20).optional().nullable(),
  CellPhone: z.string().max(20).optional().nullable(),
  Fax: z.string().max(20).optional().nullable(),
  Email: z.string().max(50).optional().nullable(),
  IsSameAsClient: z.boolean().optional().nullable(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblCustContactsInputObjectSchema)
}).strict();
export const tblCustContactsCreateWithoutContactInputObjectSchema: z.ZodType<Prisma.tblCustContactsCreateWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateWithoutContactInput>;
export const tblCustContactsCreateWithoutContactInputObjectZodSchema = makeSchema();
