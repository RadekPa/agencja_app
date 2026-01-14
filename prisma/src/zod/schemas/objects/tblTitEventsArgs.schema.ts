import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsSelectObjectSchema as tblTitEventsSelectObjectSchema } from './tblTitEventsSelect.schema';
import { tblTitEventsIncludeObjectSchema as tblTitEventsIncludeObjectSchema } from './tblTitEventsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblTitEventsSelectObjectSchema).optional(),
  include: z.lazy(() => tblTitEventsIncludeObjectSchema).optional()
}).strict();
export const tblTitEventsArgsObjectSchema = makeSchema();
export const tblTitEventsArgsObjectZodSchema = makeSchema();
