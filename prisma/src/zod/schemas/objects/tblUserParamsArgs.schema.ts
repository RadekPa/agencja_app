import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserParamsSelectObjectSchema as tblUserParamsSelectObjectSchema } from './tblUserParamsSelect.schema';
import { tblUserParamsIncludeObjectSchema as tblUserParamsIncludeObjectSchema } from './tblUserParamsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblUserParamsSelectObjectSchema).optional(),
  include: z.lazy(() => tblUserParamsIncludeObjectSchema).optional()
}).strict();
export const tblUserParamsArgsObjectSchema = makeSchema();
export const tblUserParamsArgsObjectZodSchema = makeSchema();
