import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DictDistributionTypeCountOutputTypeSelectObjectSchema as DictDistributionTypeCountOutputTypeSelectObjectSchema } from './DictDistributionTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DictDistributionTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DictDistributionTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const DictDistributionTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
