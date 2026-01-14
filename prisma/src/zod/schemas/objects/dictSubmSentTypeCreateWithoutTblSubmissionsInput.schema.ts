import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmSentType: z.string().max(30)
}).strict();
export const dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeCreateWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeCreateWithoutTblSubmissionsInput>;
export const dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
