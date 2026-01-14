import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblCustomers: z.boolean().optional()
}).strict();
export const DictStatesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictStatesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictStatesCountOutputTypeSelect>;
export const DictStatesCountOutputTypeSelectObjectZodSchema = makeSchema();
