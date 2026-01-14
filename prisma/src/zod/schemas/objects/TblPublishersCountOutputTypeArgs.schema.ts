import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TblPublishersCountOutputTypeSelectObjectSchema as TblPublishersCountOutputTypeSelectObjectSchema } from './TblPublishersCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TblPublishersCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TblPublishersCountOutputTypeArgsObjectSchema = makeSchema();
export const TblPublishersCountOutputTypeArgsObjectZodSchema = makeSchema();
