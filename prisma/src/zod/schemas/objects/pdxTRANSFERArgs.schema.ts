import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { pdxTRANSFERSelectObjectSchema as pdxTRANSFERSelectObjectSchema } from './pdxTRANSFERSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => pdxTRANSFERSelectObjectSchema).optional()
}).strict();
export const pdxTRANSFERArgsObjectSchema = makeSchema();
export const pdxTRANSFERArgsObjectZodSchema = makeSchema();
