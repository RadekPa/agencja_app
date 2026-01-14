import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyAccountIntervalID: z.number().int().optional()
}).strict();
export const dictRoyAccountIntervalWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalWhereUniqueInput>;
export const dictRoyAccountIntervalWhereUniqueInputObjectZodSchema = makeSchema();
