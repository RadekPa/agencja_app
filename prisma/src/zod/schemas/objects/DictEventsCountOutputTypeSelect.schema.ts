import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblSubmEvents: z.boolean().optional(),
  tblTitEvents: z.boolean().optional()
}).strict();
export const DictEventsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictEventsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictEventsCountOutputTypeSelect>;
export const DictEventsCountOutputTypeSelectObjectZodSchema = makeSchema();
