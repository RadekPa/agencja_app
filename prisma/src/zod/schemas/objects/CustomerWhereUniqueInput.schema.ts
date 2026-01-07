import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const CustomerWhereUniqueInputObjectSchema: z.ZodType<Prisma.CustomerWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerWhereUniqueInput>;
export const CustomerWhereUniqueInputObjectZodSchema = makeSchema();
