import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsSelectObjectSchema as tblCustContactsSelectObjectSchema } from './tblCustContactsSelect.schema';
import { tblCustContactsIncludeObjectSchema as tblCustContactsIncludeObjectSchema } from './tblCustContactsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblCustContactsSelectObjectSchema).optional(),
  include: z.lazy(() => tblCustContactsIncludeObjectSchema).optional()
}).strict();
export const tblCustContactsArgsObjectSchema = makeSchema();
export const tblCustContactsArgsObjectZodSchema = makeSchema();
