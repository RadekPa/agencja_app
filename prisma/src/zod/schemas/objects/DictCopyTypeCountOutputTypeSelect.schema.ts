import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblSubmissions: z.boolean().optional(),
  tblTitEvents: z.boolean().optional()
}).strict();
export const DictCopyTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictCopyTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictCopyTypeCountOutputTypeSelect>;
export const DictCopyTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
