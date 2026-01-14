import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Bil_nr: z.number().int().optional()
}).strict();
export const pdxBilansWhereUniqueInputObjectSchema: z.ZodType<Prisma.pdxBilansWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxBilansWhereUniqueInput>;
export const pdxBilansWhereUniqueInputObjectZodSchema = makeSchema();
