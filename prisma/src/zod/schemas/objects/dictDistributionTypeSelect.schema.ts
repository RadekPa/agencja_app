import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { DictDistributionTypeCountOutputTypeArgsObjectSchema as DictDistributionTypeCountOutputTypeArgsObjectSchema } from './DictDistributionTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  DistID: z.boolean().optional(),
  DistDesc: z.boolean().optional(),
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictDistributionTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictDistributionTypeSelectObjectSchema: z.ZodType<Prisma.dictDistributionTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeSelect>;
export const dictDistributionTypeSelectObjectZodSchema = makeSchema();
