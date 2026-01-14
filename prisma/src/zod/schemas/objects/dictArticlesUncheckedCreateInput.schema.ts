import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Article: z.string().max(10),
  LangAbb: z.string().max(3).optional().nullable()
}).strict();
export const dictArticlesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictArticlesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUncheckedCreateInput>;
export const dictArticlesUncheckedCreateInputObjectZodSchema = makeSchema();
