import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesArgsObjectSchema as tblTitlesArgsObjectSchema } from './tblTitlesArgs.schema';
import { dictEventsArgsObjectSchema as dictEventsArgsObjectSchema } from './dictEventsArgs.schema';
import { dictCopyTypeArgsObjectSchema as dictCopyTypeArgsObjectSchema } from './dictCopyTypeArgs.schema'

const makeSchema = () => z.object({
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesArgsObjectSchema)]).optional(),
  dictEvents: z.union([z.boolean(), z.lazy(() => dictEventsArgsObjectSchema)]).optional(),
  dictCopyType: z.union([z.boolean(), z.lazy(() => dictCopyTypeArgsObjectSchema)]).optional()
}).strict();
export const tblTitEventsIncludeObjectSchema: z.ZodType<Prisma.tblTitEventsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsInclude>;
export const tblTitEventsIncludeObjectZodSchema = makeSchema();
