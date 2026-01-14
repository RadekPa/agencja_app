import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCertPubSelectObjectSchema as tblCertPubSelectObjectSchema } from './tblCertPubSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblCertPubSelectObjectSchema).optional()
}).strict();
export const tblCertPubArgsObjectSchema = makeSchema();
export const tblCertPubArgsObjectZodSchema = makeSchema();
