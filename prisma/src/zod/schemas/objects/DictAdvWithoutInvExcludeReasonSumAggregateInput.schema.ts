import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.literal(true).optional()
}).strict();
export const DictAdvWithoutInvExcludeReasonSumAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvWithoutInvExcludeReasonSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvWithoutInvExcludeReasonSumAggregateInputType>;
export const DictAdvWithoutInvExcludeReasonSumAggregateInputObjectZodSchema = makeSchema();
