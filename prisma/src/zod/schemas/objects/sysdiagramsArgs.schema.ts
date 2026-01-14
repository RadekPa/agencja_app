import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { sysdiagramsSelectObjectSchema as sysdiagramsSelectObjectSchema } from './sysdiagramsSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => sysdiagramsSelectObjectSchema).optional()
}).strict();
export const sysdiagramsArgsObjectSchema = makeSchema();
export const sysdiagramsArgsObjectZodSchema = makeSchema();
