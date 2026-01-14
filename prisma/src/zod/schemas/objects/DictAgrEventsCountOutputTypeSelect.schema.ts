import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblAgrEvents: z.boolean().optional()
}).strict();
export const DictAgrEventsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictAgrEventsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictAgrEventsCountOutputTypeSelect>;
export const DictAgrEventsCountOutputTypeSelectObjectZodSchema = makeSchema();
