import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblAgrRights: z.boolean().optional()
}).strict();
export const DictRoyPriceTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictRoyPriceTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyPriceTypeCountOutputTypeSelect>;
export const DictRoyPriceTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
