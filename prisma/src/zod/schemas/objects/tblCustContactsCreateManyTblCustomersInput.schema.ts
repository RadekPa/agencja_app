import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContactID: z.number().int(),
  DefaultContact: z.number().int(),
  TypeOfContact: z.number().int(),
  Phone: z.string().max(20).optional().nullable(),
  CellPhone: z.string().max(20).optional().nullable(),
  Fax: z.string().max(20).optional().nullable(),
  Email: z.string().max(50).optional().nullable(),
  IsSameAsClient: z.boolean().optional().nullable()
}).strict();
export const tblCustContactsCreateManyTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustContactsCreateManyTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateManyTblCustomersInput>;
export const tblCustContactsCreateManyTblCustomersInputObjectZodSchema = makeSchema();
