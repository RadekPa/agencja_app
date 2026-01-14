import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatTypeID: z.number().int(),
  MatTypeDesc: z.string().max(50),
  MatTypeDescPL: z.string().max(50).optional().nullable()
}).strict();
export const dictMatTypeCreateManyInputObjectSchema: z.ZodType<Prisma.dictMatTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeCreateManyInput>;
export const dictMatTypeCreateManyInputObjectZodSchema = makeSchema();
