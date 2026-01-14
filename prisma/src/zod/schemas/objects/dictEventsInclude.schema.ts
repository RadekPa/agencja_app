import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsFindManySchema as tblSubmEventsFindManySchema } from '../findManytblSubmEvents.schema';
import { tblTitEventsFindManySchema as tblTitEventsFindManySchema } from '../findManytblTitEvents.schema';
import { DictEventsCountOutputTypeArgsObjectSchema as DictEventsCountOutputTypeArgsObjectSchema } from './DictEventsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblSubmEvents: z.union([z.boolean(), z.lazy(() => tblSubmEventsFindManySchema)]).optional(),
  tblTitEvents: z.union([z.boolean(), z.lazy(() => tblTitEventsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictEventsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictEventsIncludeObjectSchema: z.ZodType<Prisma.dictEventsInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsInclude>;
export const dictEventsIncludeObjectZodSchema = makeSchema();
