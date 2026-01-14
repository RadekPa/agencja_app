import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { DictRoyPriceTypeCountOutputTypeArgsObjectSchema as DictRoyPriceTypeCountOutputTypeArgsObjectSchema } from './DictRoyPriceTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: z.boolean().optional(),
  RoyPriceTypeDesc: z.boolean().optional(),
  RoyPriceTypePL: z.boolean().optional(),
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictRoyPriceTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictRoyPriceTypeSelectObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeSelect>;
export const dictRoyPriceTypeSelectObjectZodSchema = makeSchema();
