import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPublishersSelectObjectSchema as tblPublishersSelectObjectSchema } from './tblPublishersSelect.schema';
import { tblPublishersIncludeObjectSchema as tblPublishersIncludeObjectSchema } from './tblPublishersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblPublishersSelectObjectSchema).optional(),
  include: z.lazy(() => tblPublishersIncludeObjectSchema).optional()
}).strict();
export const tblPublishersArgsObjectSchema = makeSchema();
export const tblPublishersArgsObjectZodSchema = makeSchema();
