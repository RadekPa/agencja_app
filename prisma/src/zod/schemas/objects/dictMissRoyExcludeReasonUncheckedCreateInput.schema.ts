import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.number().int().optional(),
  ExcludeReasonCode: z.string().max(3).optional().nullable(),
  ExcludeReasonDesc: z.string().max(50).optional().nullable()
}).strict();
export const dictMissRoyExcludeReasonUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonUncheckedCreateInput>;
export const dictMissRoyExcludeReasonUncheckedCreateInputObjectZodSchema = makeSchema();
