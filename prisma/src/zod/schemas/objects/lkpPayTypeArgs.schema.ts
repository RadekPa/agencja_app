import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { lkpPayTypeSelectObjectSchema as lkpPayTypeSelectObjectSchema } from './lkpPayTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => lkpPayTypeSelectObjectSchema).optional()
}).strict();
export const lkpPayTypeArgsObjectSchema = makeSchema();
export const lkpPayTypeArgsObjectZodSchema = makeSchema();
