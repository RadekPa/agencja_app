import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingTemplatesSelectObjectSchema as tblMailingTemplatesSelectObjectSchema } from './tblMailingTemplatesSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblMailingTemplatesSelectObjectSchema).optional()
}).strict();
export const tblMailingTemplatesArgsObjectSchema = makeSchema();
export const tblMailingTemplatesArgsObjectZodSchema = makeSchema();
