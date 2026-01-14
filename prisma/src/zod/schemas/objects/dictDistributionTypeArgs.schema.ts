import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictDistributionTypeSelectObjectSchema as dictDistributionTypeSelectObjectSchema } from './dictDistributionTypeSelect.schema';
import { dictDistributionTypeIncludeObjectSchema as dictDistributionTypeIncludeObjectSchema } from './dictDistributionTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => dictDistributionTypeSelectObjectSchema).optional(),
  include: z.lazy(() => dictDistributionTypeIncludeObjectSchema).optional()
}).strict();
export const dictDistributionTypeArgsObjectSchema = makeSchema();
export const dictDistributionTypeArgsObjectZodSchema = makeSchema();
