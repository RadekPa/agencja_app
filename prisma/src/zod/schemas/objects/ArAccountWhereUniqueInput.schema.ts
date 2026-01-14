import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.number().int().optional()
}).strict();
export const ArAccountWhereUniqueInputObjectSchema: z.ZodType<Prisma.ArAccountWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountWhereUniqueInput>;
export const ArAccountWhereUniqueInputObjectZodSchema = makeSchema();
