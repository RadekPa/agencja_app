import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatTypeID: z.number().int(),
  MatTypeDesc: z.string().max(50),
  MatTypeDescPL: z.string().max(50).optional().nullable()
}).strict();
export const dictMatTypeCreateInputObjectSchema: z.ZodType<Prisma.dictMatTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeCreateInput>;
export const dictMatTypeCreateInputObjectZodSchema = makeSchema();
