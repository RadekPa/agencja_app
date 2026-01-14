import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.literal(true).optional()
}).strict();
export const DictAdvWithoutInvExcludeReasonAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvWithoutInvExcludeReasonAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvWithoutInvExcludeReasonAvgAggregateInputType>;
export const DictAdvWithoutInvExcludeReasonAvgAggregateInputObjectZodSchema = makeSchema();
