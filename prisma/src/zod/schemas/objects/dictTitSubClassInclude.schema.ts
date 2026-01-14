import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassArgsObjectSchema as dictTitMainClassArgsObjectSchema } from './dictTitMainClassArgs.schema';
import { tblMailingListsFindManySchema as tblMailingListsFindManySchema } from '../findManytblMailingLists.schema';
import { tblTitSubClassFindManySchema as tblTitSubClassFindManySchema } from '../findManytblTitSubClass.schema';
import { DictTitSubClassCountOutputTypeArgsObjectSchema as DictTitSubClassCountOutputTypeArgsObjectSchema } from './DictTitSubClassCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  dictTitMainClass: z.union([z.boolean(), z.lazy(() => dictTitMainClassArgsObjectSchema)]).optional(),
  tblMailingLists: z.union([z.boolean(), z.lazy(() => tblMailingListsFindManySchema)]).optional(),
  tblTitSubClass: z.union([z.boolean(), z.lazy(() => tblTitSubClassFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictTitSubClassCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictTitSubClassIncludeObjectSchema: z.ZodType<Prisma.dictTitSubClassInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassInclude>;
export const dictTitSubClassIncludeObjectZodSchema = makeSchema();
