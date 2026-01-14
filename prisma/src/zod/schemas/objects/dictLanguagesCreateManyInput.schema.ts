import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  LangAbb: z.string().max(3),
  LangDesc: z.string().max(30),
  LangPL: z.string().max(30)
}).strict();
export const dictLanguagesCreateManyInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateManyInput>;
export const dictLanguagesCreateManyInputObjectZodSchema = makeSchema();
