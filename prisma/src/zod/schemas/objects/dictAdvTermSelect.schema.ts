import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTermId: z.boolean().optional(),
  AdvTermDesc: z.boolean().optional(),
  AdvTermPL: z.boolean().optional()
}).strict();
export const dictAdvTermSelectObjectSchema: z.ZodType<Prisma.dictAdvTermSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermSelect>;
export const dictAdvTermSelectObjectZodSchema = makeSchema();
