import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { DictRoyAccountIntervalCountOutputTypeArgsObjectSchema as DictRoyAccountIntervalCountOutputTypeArgsObjectSchema } from './DictRoyAccountIntervalCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: z.boolean().optional(),
  RoyAccountIntervalDesc: z.boolean().optional(),
  IntervalAbb: z.boolean().optional(),
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictRoyAccountIntervalCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictRoyAccountIntervalSelectObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalSelect>;
export const dictRoyAccountIntervalSelectObjectZodSchema = makeSchema();
