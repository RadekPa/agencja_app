import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  principal_id: z.literal(true).optional(),
  diagram_id: z.literal(true).optional(),
  version: z.literal(true).optional()
}).strict();
export const SysdiagramsAvgAggregateInputObjectSchema: z.ZodType<Prisma.SysdiagramsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SysdiagramsAvgAggregateInputType>;
export const SysdiagramsAvgAggregateInputObjectZodSchema = makeSchema();
