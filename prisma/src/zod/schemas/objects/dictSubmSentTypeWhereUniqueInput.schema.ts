import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmSentTypeID: z.number().int().optional()
}).strict();
export const dictSubmSentTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeWhereUniqueInput>;
export const dictSubmSentTypeWhereUniqueInputObjectZodSchema = makeSchema();
