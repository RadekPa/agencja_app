import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  VatCode: z.boolean().optional(),
  Description: z.boolean().optional(),
  VatRate: z.boolean().optional(),
  DescriptionPL: z.boolean().optional()
}).strict();
export const ArVatSelectObjectSchema: z.ZodType<Prisma.ArVatSelect> = makeSchema() as unknown as z.ZodType<Prisma.ArVatSelect>;
export const ArVatSelectObjectZodSchema = makeSchema();
