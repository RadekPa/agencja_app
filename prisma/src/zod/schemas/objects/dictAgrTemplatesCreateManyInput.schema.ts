import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Name: z.string().max(30),
  FileName: z.string().max(255)
}).strict();
export const dictAgrTemplatesCreateManyInputObjectSchema: z.ZodType<Prisma.dictAgrTemplatesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrTemplatesCreateManyInput>;
export const dictAgrTemplatesCreateManyInputObjectZodSchema = makeSchema();
