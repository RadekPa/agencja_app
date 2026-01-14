import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailSelectObjectSchema as ArTransferDetailSelectObjectSchema } from './ArTransferDetailSelect.schema';
import { ArTransferDetailIncludeObjectSchema as ArTransferDetailIncludeObjectSchema } from './ArTransferDetailInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ArTransferDetailSelectObjectSchema).optional(),
  include: z.lazy(() => ArTransferDetailIncludeObjectSchema).optional()
}).strict();
export const ArTransferDetailArgsObjectSchema = makeSchema();
export const ArTransferDetailArgsObjectZodSchema = makeSchema();
