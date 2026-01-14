import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonCode: z.string().max(3).optional().nullable(),
  ExcludeReasonDesc: z.string().max(50).optional().nullable()
}).strict();
export const dictAdvWithoutInvExcludeReasonCreateInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonCreateInput>;
export const dictAdvWithoutInvExcludeReasonCreateInputObjectZodSchema = makeSchema();
