import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.boolean().optional(),
  ExcludeReasonCode: z.boolean().optional(),
  ExcludeReasonDesc: z.boolean().optional()
}).strict();
export const dictMissRoyExcludeReasonSelectObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonSelect>;
export const dictMissRoyExcludeReasonSelectObjectZodSchema = makeSchema();
