import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsArgsObjectSchema as tblSubmissionsArgsObjectSchema } from './tblSubmissionsArgs.schema';
import { dictEventsArgsObjectSchema as dictEventsArgsObjectSchema } from './dictEventsArgs.schema'

const makeSchema = () => z.object({
  tblSubmissions: z.union([z.boolean(), z.lazy(() => tblSubmissionsArgsObjectSchema)]).optional(),
  dictEvents: z.union([z.boolean(), z.lazy(() => dictEventsArgsObjectSchema)]).optional()
}).strict();
export const tblSubmEventsIncludeObjectSchema: z.ZodType<Prisma.tblSubmEventsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsInclude>;
export const tblSubmEventsIncludeObjectZodSchema = makeSchema();
