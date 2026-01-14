import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { DictRoyPriceTypeCountOutputTypeArgsObjectSchema as DictRoyPriceTypeCountOutputTypeArgsObjectSchema } from './DictRoyPriceTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictRoyPriceTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictRoyPriceTypeIncludeObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeInclude>;
export const dictRoyPriceTypeIncludeObjectZodSchema = makeSchema();
