import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  VatCode: z.literal(true).optional(),
  Description: z.literal(true).optional(),
  VatRate: z.literal(true).optional(),
  DescriptionPL: z.literal(true).optional()
}).strict();
export const ArVatMinAggregateInputObjectSchema: z.ZodType<Prisma.ArVatMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArVatMinAggregateInputType>;
export const ArVatMinAggregateInputObjectZodSchema = makeSchema();
