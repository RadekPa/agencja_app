import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.boolean().optional(),
  ExcludeReasonCode: z.boolean().optional(),
  ExcludeReasonDesc: z.boolean().optional()
}).strict();
export const dictAdvWithoutInvExcludeReasonSelectObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonSelect>;
export const dictAdvWithoutInvExcludeReasonSelectObjectZodSchema = makeSchema();
