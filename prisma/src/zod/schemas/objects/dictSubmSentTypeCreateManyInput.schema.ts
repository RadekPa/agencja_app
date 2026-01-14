import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmSentType: z.string().max(30)
}).strict();
export const dictSubmSentTypeCreateManyInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeCreateManyInput>;
export const dictSubmSentTypeCreateManyInputObjectZodSchema = makeSchema();
