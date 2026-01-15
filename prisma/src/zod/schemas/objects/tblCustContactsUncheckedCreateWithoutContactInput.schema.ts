import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int(),
  DefaultContact: z.number().int(),
  TypeOfContact: z.number().int(),
  Phone: z.string().optional().nullable(),
  CellPhone: z.string().optional().nullable(),
  Fax: z.string().optional().nullable(),
  Email: z.string().optional().nullable(),
  IsSameAsClient: z.boolean().optional().nullable()
}).strict();
export const tblCustContactsUncheckedCreateWithoutContactInputObjectSchema: z.ZodType<Prisma.tblCustContactsUncheckedCreateWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUncheckedCreateWithoutContactInput>;
export const tblCustContactsUncheckedCreateWithoutContactInputObjectZodSchema = makeSchema();
