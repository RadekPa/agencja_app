import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RepModeID: z.literal(true).optional(),
  RepModeDesc: z.literal(true).optional()
}).strict();
export const DictRepModesMinAggregateInputObjectSchema: z.ZodType<Prisma.DictRepModesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRepModesMinAggregateInputType>;
export const DictRepModesMinAggregateInputObjectZodSchema = makeSchema();
