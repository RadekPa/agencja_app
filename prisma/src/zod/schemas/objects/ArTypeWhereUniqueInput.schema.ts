import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.string().max(3).optional()
}).strict();
export const ArTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.ArTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeWhereUniqueInput>;
export const ArTypeWhereUniqueInputObjectZodSchema = makeSchema();
