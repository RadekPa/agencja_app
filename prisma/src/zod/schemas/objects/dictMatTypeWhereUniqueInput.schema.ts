import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatTypeID: z.number().int().optional()
}).strict();
export const dictMatTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictMatTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeWhereUniqueInput>;
export const dictMatTypeWhereUniqueInputObjectZodSchema = makeSchema();
