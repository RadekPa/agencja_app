import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblAgrRights: z.boolean().optional()
}).strict();
export const DictDistributionTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictDistributionTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictDistributionTypeCountOutputTypeSelect>;
export const DictDistributionTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
