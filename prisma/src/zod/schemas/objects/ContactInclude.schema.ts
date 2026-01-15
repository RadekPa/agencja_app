import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsFindManySchema as tblCustContactsFindManySchema } from '../findManytblCustContacts.schema';
import { ContactCountOutputTypeArgsObjectSchema as ContactCountOutputTypeArgsObjectSchema } from './ContactCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblCustContacts: z.union([z.boolean(), z.lazy(() => tblCustContactsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ContactCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ContactIncludeObjectSchema: z.ZodType<Prisma.ContactInclude> = makeSchema() as unknown as z.ZodType<Prisma.ContactInclude>;
export const ContactIncludeObjectZodSchema = makeSchema();
