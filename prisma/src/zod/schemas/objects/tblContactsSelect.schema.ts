import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsFindManySchema as tblCustContactsFindManySchema } from '../findManytblCustContacts.schema';
import { TblContactsCountOutputTypeArgsObjectSchema as TblContactsCountOutputTypeArgsObjectSchema } from './TblContactsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  ContactID: z.boolean().optional(),
  PhoneNumber: z.boolean().optional(),
  FirstName: z.boolean().optional(),
  MiddleName: z.boolean().optional(),
  LastName: z.boolean().optional(),
  Informal: z.boolean().optional(),
  Fax: z.boolean().optional(),
  Email: z.boolean().optional(),
  UserMod: z.boolean().optional(),
  DateMod: z.boolean().optional(),
  ContactPosition: z.boolean().optional(),
  Accountant: z.boolean().optional(),
  tblCustContacts: z.union([z.boolean(), z.lazy(() => tblCustContactsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblContactsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblContactsSelectObjectSchema: z.ZodType<Prisma.tblContactsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsSelect>;
export const tblContactsSelectObjectZodSchema = makeSchema();
