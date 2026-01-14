import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { DictRightsFormCountOutputTypeArgsObjectSchema as DictRightsFormCountOutputTypeArgsObjectSchema } from './DictRightsFormCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  RightFormID: z.boolean().optional(),
  RightFormDesc: z.boolean().optional(),
  RightFormPL: z.boolean().optional(),
  RightFormAbbPL: z.boolean().optional(),
  RightFormAbbEN: z.boolean().optional(),
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictRightsFormCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictRightsFormSelectObjectSchema: z.ZodType<Prisma.dictRightsFormSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormSelect>;
export const dictRightsFormSelectObjectZodSchema = makeSchema();
