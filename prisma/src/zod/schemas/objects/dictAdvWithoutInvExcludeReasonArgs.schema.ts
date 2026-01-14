import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAdvWithoutInvExcludeReasonSelectObjectSchema as dictAdvWithoutInvExcludeReasonSelectObjectSchema } from './dictAdvWithoutInvExcludeReasonSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictAdvWithoutInvExcludeReasonSelectObjectSchema).optional()
}).strict();
export const dictAdvWithoutInvExcludeReasonArgsObjectSchema = makeSchema();
export const dictAdvWithoutInvExcludeReasonArgsObjectZodSchema = makeSchema();
