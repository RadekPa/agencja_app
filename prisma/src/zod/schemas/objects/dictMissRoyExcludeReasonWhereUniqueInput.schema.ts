import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.number().int().optional()
}).strict();
export const dictMissRoyExcludeReasonWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonWhereUniqueInput>;
export const dictMissRoyExcludeReasonWhereUniqueInputObjectZodSchema = makeSchema();
