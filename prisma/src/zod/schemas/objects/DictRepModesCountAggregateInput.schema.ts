import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RepModeID: z.literal(true).optional(),
  RepModeDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictRepModesCountAggregateInputObjectSchema: z.ZodType<Prisma.DictRepModesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRepModesCountAggregateInputType>;
export const DictRepModesCountAggregateInputObjectZodSchema = makeSchema();
