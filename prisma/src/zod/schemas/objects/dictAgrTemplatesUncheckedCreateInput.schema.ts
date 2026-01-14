import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Name: z.string().max(30),
  FileName: z.string().max(255)
}).strict();
export const dictAgrTemplatesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictAgrTemplatesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrTemplatesUncheckedCreateInput>;
export const dictAgrTemplatesUncheckedCreateInputObjectZodSchema = makeSchema();
