import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatTypeID: z.number().int(),
  MatTypeDesc: z.string().max(50),
  MatTypeDescPL: z.string().max(50).optional().nullable()
}).strict();
export const dictMatTypeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictMatTypeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeUncheckedCreateInput>;
export const dictMatTypeUncheckedCreateInputObjectZodSchema = makeSchema();
