import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  StateID: z.literal(true).optional(),
  CountryID: z.literal(true).optional(),
  StateAbb: z.literal(true).optional(),
  StateName: z.literal(true).optional()
}).strict();
export const DictStatesMinAggregateInputObjectSchema: z.ZodType<Prisma.DictStatesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictStatesMinAggregateInputType>;
export const DictStatesMinAggregateInputObjectZodSchema = makeSchema();
