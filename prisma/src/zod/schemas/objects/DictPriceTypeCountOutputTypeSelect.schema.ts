import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblAgrRights: z.boolean().optional()
}).strict();
export const DictPriceTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictPriceTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictPriceTypeCountOutputTypeSelect>;
export const DictPriceTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
