import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.number().int().optional(),
  ExcludeReasonCode: z.string().max(3).optional().nullable(),
  ExcludeReasonDesc: z.string().max(50).optional().nullable()
}).strict();
export const dictAdvWithoutInvExcludeReasonUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonUncheckedCreateInput>;
export const dictAdvWithoutInvExcludeReasonUncheckedCreateInputObjectZodSchema = makeSchema();
