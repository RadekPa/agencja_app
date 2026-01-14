import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsFindManySchema as tblAgrEventsFindManySchema } from '../findManytblAgrEvents.schema';
import { DictAgrEventsCountOutputTypeArgsObjectSchema as DictAgrEventsCountOutputTypeArgsObjectSchema } from './DictAgrEventsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  AgrEventCode: z.boolean().optional(),
  AgrEventDesc: z.boolean().optional(),
  Status: z.boolean().optional(),
  tblAgrEvents: z.union([z.boolean(), z.lazy(() => tblAgrEventsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictAgrEventsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictAgrEventsSelectObjectSchema: z.ZodType<Prisma.dictAgrEventsSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsSelect>;
export const dictAgrEventsSelectObjectZodSchema = makeSchema();
