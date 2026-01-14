import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteSelectObjectSchema as tblClients_obsoleteSelectObjectSchema } from './tblClients_obsoleteSelect.schema';
import { tblClients_obsoleteIncludeObjectSchema as tblClients_obsoleteIncludeObjectSchema } from './tblClients_obsoleteInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblClients_obsoleteSelectObjectSchema).optional(),
  include: z.lazy(() => tblClients_obsoleteIncludeObjectSchema).optional()
}).strict();
export const tblClients_obsoleteArgsObjectSchema = makeSchema();
export const tblClients_obsoleteArgsObjectZodSchema = makeSchema();
