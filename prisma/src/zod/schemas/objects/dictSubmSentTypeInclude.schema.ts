import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsFindManySchema as tblSubmissionsFindManySchema } from '../findManytblSubmissions.schema';
import { DictSubmSentTypeCountOutputTypeArgsObjectSchema as DictSubmSentTypeCountOutputTypeArgsObjectSchema } from './DictSubmSentTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblSubmissions: z.union([z.boolean(), z.lazy(() => tblSubmissionsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictSubmSentTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictSubmSentTypeIncludeObjectSchema: z.ZodType<Prisma.dictSubmSentTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeInclude>;
export const dictSubmSentTypeIncludeObjectZodSchema = makeSchema();
