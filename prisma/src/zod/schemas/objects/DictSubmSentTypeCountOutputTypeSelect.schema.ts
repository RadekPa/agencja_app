import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblSubmissions: z.boolean().optional()
}).strict();
export const DictSubmSentTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictSubmSentTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictSubmSentTypeCountOutputTypeSelect>;
export const DictSubmSentTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
