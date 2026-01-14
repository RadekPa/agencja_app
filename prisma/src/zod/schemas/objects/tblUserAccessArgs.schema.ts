import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessSelectObjectSchema as tblUserAccessSelectObjectSchema } from './tblUserAccessSelect.schema';
import { tblUserAccessIncludeObjectSchema as tblUserAccessIncludeObjectSchema } from './tblUserAccessInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblUserAccessSelectObjectSchema).optional(),
  include: z.lazy(() => tblUserAccessIncludeObjectSchema).optional()
}).strict();
export const tblUserAccessArgsObjectSchema = makeSchema();
export const tblUserAccessArgsObjectZodSchema = makeSchema();
