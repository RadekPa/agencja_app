import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HelionLocalSelectObjectSchema as HelionLocalSelectObjectSchema } from './HelionLocalSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => HelionLocalSelectObjectSchema).optional()
}).strict();
export const HelionLocalArgsObjectSchema = makeSchema();
export const HelionLocalArgsObjectZodSchema = makeSchema();
