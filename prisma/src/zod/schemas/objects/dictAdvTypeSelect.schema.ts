import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTypeId: z.boolean().optional(),
  AdvTypeDesc: z.boolean().optional(),
  AdvTypeDescPL: z.boolean().optional()
}).strict();
export const dictAdvTypeSelectObjectSchema: z.ZodType<Prisma.dictAdvTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeSelect>;
export const dictAdvTypeSelectObjectZodSchema = makeSchema();
