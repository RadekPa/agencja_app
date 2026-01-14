import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsFindManySchema as tblCustContactsFindManySchema } from '../findManytblCustContacts.schema';
import { TblContactsCountOutputTypeArgsObjectSchema as TblContactsCountOutputTypeArgsObjectSchema } from './TblContactsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblCustContacts: z.union([z.boolean(), z.lazy(() => tblCustContactsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblContactsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblContactsIncludeObjectSchema: z.ZodType<Prisma.tblContactsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsInclude>;
export const tblContactsIncludeObjectZodSchema = makeSchema();
