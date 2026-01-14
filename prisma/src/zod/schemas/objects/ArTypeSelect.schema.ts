import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.boolean().optional(),
  ArTypeDescription: z.boolean().optional(),
  ArTypeDescriptionPL: z.boolean().optional()
}).strict();
export const ArTypeSelectObjectSchema: z.ZodType<Prisma.ArTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeSelect>;
export const ArTypeSelectObjectZodSchema = makeSchema();
