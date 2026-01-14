import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.literal(true).optional(),
  principal_id: z.literal(true).optional(),
  diagram_id: z.literal(true).optional(),
  version: z.literal(true).optional(),
  definition: z.literal(true).optional()
}).strict();
export const SysdiagramsMinAggregateInputObjectSchema: z.ZodType<Prisma.SysdiagramsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SysdiagramsMinAggregateInputType>;
export const SysdiagramsMinAggregateInputObjectZodSchema = makeSchema();
