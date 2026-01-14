import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { DictRightsFormCountOutputTypeArgsObjectSchema as DictRightsFormCountOutputTypeArgsObjectSchema } from './DictRightsFormCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictRightsFormCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictRightsFormIncludeObjectSchema: z.ZodType<Prisma.dictRightsFormInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormInclude>;
export const dictRightsFormIncludeObjectZodSchema = makeSchema();
