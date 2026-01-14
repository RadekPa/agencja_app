import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PearsonAdvAndRoySelectObjectSchema as PearsonAdvAndRoySelectObjectSchema } from './PearsonAdvAndRoySelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PearsonAdvAndRoySelectObjectSchema).optional()
}).strict();
export const PearsonAdvAndRoyArgsObjectSchema = makeSchema();
export const PearsonAdvAndRoyArgsObjectZodSchema = makeSchema();
