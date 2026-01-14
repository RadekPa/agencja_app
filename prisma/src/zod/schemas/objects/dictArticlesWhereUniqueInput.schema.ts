import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Article: z.string().max(10).optional()
}).strict();
export const dictArticlesWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictArticlesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesWhereUniqueInput>;
export const dictArticlesWhereUniqueInputObjectZodSchema = makeSchema();
