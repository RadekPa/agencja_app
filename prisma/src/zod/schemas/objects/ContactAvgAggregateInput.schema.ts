import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  informal: z.literal(true).optional(),
  accountant: z.literal(true).optional()
}).strict();
export const ContactAvgAggregateInputObjectSchema: z.ZodType<Prisma.ContactAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ContactAvgAggregateInputType>;
export const ContactAvgAggregateInputObjectZodSchema = makeSchema();
