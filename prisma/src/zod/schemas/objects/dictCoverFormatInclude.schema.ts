import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesFindManySchema as tblTitlesFindManySchema } from '../findManytblTitles.schema';
import { DictCoverFormatCountOutputTypeArgsObjectSchema as DictCoverFormatCountOutputTypeArgsObjectSchema } from './DictCoverFormatCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictCoverFormatCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictCoverFormatIncludeObjectSchema: z.ZodType<Prisma.dictCoverFormatInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatInclude>;
export const dictCoverFormatIncludeObjectZodSchema = makeSchema();
