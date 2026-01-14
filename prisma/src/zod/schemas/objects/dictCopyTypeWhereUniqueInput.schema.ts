import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CopyTypeID: z.number().int().optional()
}).strict();
export const dictCopyTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictCopyTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeWhereUniqueInput>;
export const dictCopyTypeWhereUniqueInputObjectZodSchema = makeSchema();
