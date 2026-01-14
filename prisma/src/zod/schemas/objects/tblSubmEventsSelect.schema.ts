import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsArgsObjectSchema as tblSubmissionsArgsObjectSchema } from './tblSubmissionsArgs.schema';
import { dictEventsArgsObjectSchema as dictEventsArgsObjectSchema } from './dictEventsArgs.schema'

const makeSchema = () => z.object({
  SubmEventID: z.boolean().optional(),
  SubmID: z.boolean().optional(),
  EventCode: z.boolean().optional(),
  EventDate: z.boolean().optional(),
  NoOfCopies: z.boolean().optional(),
  EndDate: z.boolean().optional(),
  tblSubmissions: z.union([z.boolean(), z.lazy(() => tblSubmissionsArgsObjectSchema)]).optional(),
  dictEvents: z.union([z.boolean(), z.lazy(() => dictEventsArgsObjectSchema)]).optional()
}).strict();
export const tblSubmEventsSelectObjectSchema: z.ZodType<Prisma.tblSubmEventsSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsSelect>;
export const tblSubmEventsSelectObjectZodSchema = makeSchema();
