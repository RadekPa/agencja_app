import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmSentTypeID: z.number().int().optional(),
  SubmSentType: z.string()
}).strict();
export const dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInput>;
export const dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
