import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.boolean().optional(),
  AccountDescription: z.boolean().optional()
}).strict();
export const ArAccountSelectObjectSchema: z.ZodType<Prisma.ArAccountSelect> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountSelect>;
export const ArAccountSelectObjectZodSchema = makeSchema();
