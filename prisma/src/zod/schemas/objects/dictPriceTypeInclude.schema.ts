import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { DictPriceTypeCountOutputTypeArgsObjectSchema as DictPriceTypeCountOutputTypeArgsObjectSchema } from './DictPriceTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictPriceTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictPriceTypeIncludeObjectSchema: z.ZodType<Prisma.dictPriceTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeInclude>;
export const dictPriceTypeIncludeObjectZodSchema = makeSchema();
