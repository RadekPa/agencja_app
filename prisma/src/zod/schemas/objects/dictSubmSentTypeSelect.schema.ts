import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsFindManySchema as tblSubmissionsFindManySchema } from '../findManytblSubmissions.schema';
import { DictSubmSentTypeCountOutputTypeArgsObjectSchema as DictSubmSentTypeCountOutputTypeArgsObjectSchema } from './DictSubmSentTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: z.boolean().optional(),
  SubmSentType: z.boolean().optional(),
  tblSubmissions: z.union([z.boolean(), z.lazy(() => tblSubmissionsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictSubmSentTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictSubmSentTypeSelectObjectSchema: z.ZodType<Prisma.dictSubmSentTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeSelect>;
export const dictSubmSentTypeSelectObjectZodSchema = makeSchema();
