import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArVatSelectObjectSchema as ArVatSelectObjectSchema } from './ArVatSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ArVatSelectObjectSchema).optional()
}).strict();
export const ArVatArgsObjectSchema = makeSchema();
export const ArVatArgsObjectZodSchema = makeSchema();
