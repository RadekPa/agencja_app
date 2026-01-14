import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  LangAbb: z.string().max(3).optional()
}).strict();
export const dictLanguagesWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictLanguagesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesWhereUniqueInput>;
export const dictLanguagesWhereUniqueInputObjectZodSchema = makeSchema();
