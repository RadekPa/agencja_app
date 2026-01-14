import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Name: z.boolean().optional(),
  FileName: z.boolean().optional()
}).strict();
export const dictAgrTemplatesSelectObjectSchema: z.ZodType<Prisma.dictAgrTemplatesSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrTemplatesSelect>;
export const dictAgrTemplatesSelectObjectZodSchema = makeSchema();
