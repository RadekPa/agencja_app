import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { DictRoyAccountIntervalCountOutputTypeArgsObjectSchema as DictRoyAccountIntervalCountOutputTypeArgsObjectSchema } from './DictRoyAccountIntervalCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictRoyAccountIntervalCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictRoyAccountIntervalIncludeObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalInclude>;
export const dictRoyAccountIntervalIncludeObjectZodSchema = makeSchema();
