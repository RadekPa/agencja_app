import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RepModeID: z.literal(true).optional()
}).strict();
export const DictRepModesAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictRepModesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRepModesAvgAggregateInputType>;
export const DictRepModesAvgAggregateInputObjectZodSchema = makeSchema();
