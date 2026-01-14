import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.number().int(),
  AccountDescription: z.string().max(40)
}).strict();
export const ArAccountCreateInputObjectSchema: z.ZodType<Prisma.ArAccountCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountCreateInput>;
export const ArAccountCreateInputObjectZodSchema = makeSchema();
