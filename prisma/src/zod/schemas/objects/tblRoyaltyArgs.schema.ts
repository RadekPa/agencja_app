import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyaltySelectObjectSchema as tblRoyaltySelectObjectSchema } from './tblRoyaltySelect.schema';
import { tblRoyaltyIncludeObjectSchema as tblRoyaltyIncludeObjectSchema } from './tblRoyaltyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblRoyaltySelectObjectSchema).optional(),
  include: z.lazy(() => tblRoyaltyIncludeObjectSchema).optional()
}).strict();
export const tblRoyaltyArgsObjectSchema = makeSchema();
export const tblRoyaltyArgsObjectZodSchema = makeSchema();
