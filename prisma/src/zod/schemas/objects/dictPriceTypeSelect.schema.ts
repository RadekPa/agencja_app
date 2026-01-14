import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { DictPriceTypeCountOutputTypeArgsObjectSchema as DictPriceTypeCountOutputTypeArgsObjectSchema } from './DictPriceTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  PriceTypeID: z.boolean().optional(),
  PriceTypeDesc: z.boolean().optional(),
  PriceTypePL: z.boolean().optional(),
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictPriceTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictPriceTypeSelectObjectSchema: z.ZodType<Prisma.dictPriceTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeSelect>;
export const dictPriceTypeSelectObjectZodSchema = makeSchema();
