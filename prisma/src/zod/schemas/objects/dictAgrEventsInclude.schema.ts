import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsFindManySchema as tblAgrEventsFindManySchema } from '../findManytblAgrEvents.schema';
import { DictAgrEventsCountOutputTypeArgsObjectSchema as DictAgrEventsCountOutputTypeArgsObjectSchema } from './DictAgrEventsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblAgrEvents: z.union([z.boolean(), z.lazy(() => tblAgrEventsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictAgrEventsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictAgrEventsIncludeObjectSchema: z.ZodType<Prisma.dictAgrEventsInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsInclude>;
export const dictAgrEventsIncludeObjectZodSchema = makeSchema();
