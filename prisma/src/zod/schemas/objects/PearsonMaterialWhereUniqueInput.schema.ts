import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MyNumber: z.number().int().optional()
}).strict();
export const PearsonMaterialWhereUniqueInputObjectSchema: z.ZodType<Prisma.PearsonMaterialWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialWhereUniqueInput>;
export const PearsonMaterialWhereUniqueInputObjectZodSchema = makeSchema();
