import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblContactsSelectObjectSchema as tblContactsSelectObjectSchema } from './tblContactsSelect.schema';
import { tblContactsIncludeObjectSchema as tblContactsIncludeObjectSchema } from './tblContactsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblContactsSelectObjectSchema).optional(),
  include: z.lazy(() => tblContactsIncludeObjectSchema).optional()
}).strict();
export const tblContactsArgsObjectSchema = makeSchema();
export const tblContactsArgsObjectZodSchema = makeSchema();
