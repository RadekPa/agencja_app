import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsSelectObjectSchema as tblMailingListsSelectObjectSchema } from './tblMailingListsSelect.schema';
import { tblMailingListsIncludeObjectSchema as tblMailingListsIncludeObjectSchema } from './tblMailingListsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblMailingListsSelectObjectSchema).optional(),
  include: z.lazy(() => tblMailingListsIncludeObjectSchema).optional()
}).strict();
export const tblMailingListsArgsObjectSchema = makeSchema();
export const tblMailingListsArgsObjectZodSchema = makeSchema();
