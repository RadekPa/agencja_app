import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonCode: z.string().max(3).optional().nullable(),
  ExcludeReasonDesc: z.string().max(50).optional().nullable()
}).strict();
export const dictAdvWithoutInvExcludeReasonCreateManyInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonCreateManyInput>;
export const dictAdvWithoutInvExcludeReasonCreateManyInputObjectZodSchema = makeSchema();
