import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTypeId: z.number().int().optional()
}).strict();
export const dictAdvTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictAdvTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeWhereUniqueInput>;
export const dictAdvTypeWhereUniqueInputObjectZodSchema = makeSchema();
