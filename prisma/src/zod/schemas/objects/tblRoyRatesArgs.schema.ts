import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesSelectObjectSchema as tblRoyRatesSelectObjectSchema } from './tblRoyRatesSelect.schema';
import { tblRoyRatesIncludeObjectSchema as tblRoyRatesIncludeObjectSchema } from './tblRoyRatesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblRoyRatesSelectObjectSchema).optional(),
  include: z.lazy(() => tblRoyRatesIncludeObjectSchema).optional()
}).strict();
export const tblRoyRatesArgsObjectSchema = makeSchema();
export const tblRoyRatesArgsObjectZodSchema = makeSchema();
