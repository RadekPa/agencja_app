import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatTypeID: z.boolean().optional(),
  MatTypeDesc: z.boolean().optional(),
  MatTypeDescPL: z.boolean().optional()
}).strict();
export const dictMatTypeSelectObjectSchema: z.ZodType<Prisma.dictMatTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeSelect>;
export const dictMatTypeSelectObjectZodSchema = makeSchema();
