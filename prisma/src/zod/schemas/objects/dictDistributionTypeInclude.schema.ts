import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsFindManySchema as tblAgrRightsFindManySchema } from '../findManytblAgrRights.schema';
import { DictDistributionTypeCountOutputTypeArgsObjectSchema as DictDistributionTypeCountOutputTypeArgsObjectSchema } from './DictDistributionTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblAgrRights: z.union([z.boolean(), z.lazy(() => tblAgrRightsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictDistributionTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictDistributionTypeIncludeObjectSchema: z.ZodType<Prisma.dictDistributionTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeInclude>;
export const dictDistributionTypeIncludeObjectZodSchema = makeSchema();
