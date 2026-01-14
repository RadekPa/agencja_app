import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.literal(true).optional(),
  ExcludeReasonCode: z.literal(true).optional(),
  ExcludeReasonDesc: z.literal(true).optional()
}).strict();
export const DictAdvWithoutInvExcludeReasonMinAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvWithoutInvExcludeReasonMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvWithoutInvExcludeReasonMinAggregateInputType>;
export const DictAdvWithoutInvExcludeReasonMinAggregateInputObjectZodSchema = makeSchema();
