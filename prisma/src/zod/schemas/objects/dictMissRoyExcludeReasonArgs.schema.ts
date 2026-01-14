import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictMissRoyExcludeReasonSelectObjectSchema as dictMissRoyExcludeReasonSelectObjectSchema } from './dictMissRoyExcludeReasonSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictMissRoyExcludeReasonSelectObjectSchema).optional()
}).strict();
export const dictMissRoyExcludeReasonArgsObjectSchema = makeSchema();
export const dictMissRoyExcludeReasonArgsObjectZodSchema = makeSchema();
