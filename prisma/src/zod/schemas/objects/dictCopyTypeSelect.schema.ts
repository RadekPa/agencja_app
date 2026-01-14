import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsFindManySchema as tblSubmissionsFindManySchema } from '../findManytblSubmissions.schema';
import { tblTitEventsFindManySchema as tblTitEventsFindManySchema } from '../findManytblTitEvents.schema';
import { DictCopyTypeCountOutputTypeArgsObjectSchema as DictCopyTypeCountOutputTypeArgsObjectSchema } from './DictCopyTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  CopyTypeID: z.boolean().optional(),
  CopyType: z.boolean().optional(),
  tblSubmissions: z.union([z.boolean(), z.lazy(() => tblSubmissionsFindManySchema)]).optional(),
  tblTitEvents: z.union([z.boolean(), z.lazy(() => tblTitEventsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictCopyTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictCopyTypeSelectObjectSchema: z.ZodType<Prisma.dictCopyTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeSelect>;
export const dictCopyTypeSelectObjectZodSchema = makeSchema();
