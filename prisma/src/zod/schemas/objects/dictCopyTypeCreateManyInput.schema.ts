import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CopyType: z.string().max(30).optional().nullable()
}).strict();
export const dictCopyTypeCreateManyInputObjectSchema: z.ZodType<Prisma.dictCopyTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeCreateManyInput>;
export const dictCopyTypeCreateManyInputObjectZodSchema = makeSchema();
