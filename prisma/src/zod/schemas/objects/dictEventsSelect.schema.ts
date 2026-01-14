import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsFindManySchema as tblSubmEventsFindManySchema } from '../findManytblSubmEvents.schema';
import { tblTitEventsFindManySchema as tblTitEventsFindManySchema } from '../findManytblTitEvents.schema';
import { DictEventsCountOutputTypeArgsObjectSchema as DictEventsCountOutputTypeArgsObjectSchema } from './DictEventsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  EventCode: z.boolean().optional(),
  EventDesc: z.boolean().optional(),
  tblSubmEvents: z.union([z.boolean(), z.lazy(() => tblSubmEventsFindManySchema)]).optional(),
  tblTitEvents: z.union([z.boolean(), z.lazy(() => tblTitEventsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictEventsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictEventsSelectObjectSchema: z.ZodType<Prisma.dictEventsSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsSelect>;
export const dictEventsSelectObjectZodSchema = makeSchema();
