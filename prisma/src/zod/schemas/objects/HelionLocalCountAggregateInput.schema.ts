import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ISBNORG: z.literal(true).optional(),
  ISBNHELION: z.literal(true).optional(),
  TYTULORG: z.literal(true).optional(),
  TYTULHELION: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const HelionLocalCountAggregateInputObjectSchema: z.ZodType<Prisma.HelionLocalCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.HelionLocalCountAggregateInputType>;
export const HelionLocalCountAggregateInputObjectZodSchema = makeSchema();
