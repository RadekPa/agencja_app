import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesFindManySchema as tblTitlesFindManySchema } from '../findManytblTitles.schema';
import { DictCoverFormatCountOutputTypeArgsObjectSchema as DictCoverFormatCountOutputTypeArgsObjectSchema } from './DictCoverFormatCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  CoverFormatID: z.boolean().optional(),
  CoverFormatDesc: z.boolean().optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictCoverFormatCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictCoverFormatSelectObjectSchema: z.ZodType<Prisma.dictCoverFormatSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatSelect>;
export const dictCoverFormatSelectObjectZodSchema = makeSchema();
