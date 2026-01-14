import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassFindManySchema as dictTitSubClassFindManySchema } from '../findManydictTitSubClass.schema';
import { tblMailingListsFindManySchema as tblMailingListsFindManySchema } from '../findManytblMailingLists.schema';
import { tblTitlesFindManySchema as tblTitlesFindManySchema } from '../findManytblTitles.schema';
import { DictTitMainClassCountOutputTypeArgsObjectSchema as DictTitMainClassCountOutputTypeArgsObjectSchema } from './DictTitMainClassCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  dictTitSubClass: z.union([z.boolean(), z.lazy(() => dictTitSubClassFindManySchema)]).optional(),
  tblMailingLists: z.union([z.boolean(), z.lazy(() => tblMailingListsFindManySchema)]).optional(),
  tblTitles: z.union([z.boolean(), z.lazy(() => tblTitlesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictTitMainClassCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictTitMainClassIncludeObjectSchema: z.ZodType<Prisma.dictTitMainClassInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassInclude>;
export const dictTitMainClassIncludeObjectZodSchema = makeSchema();
