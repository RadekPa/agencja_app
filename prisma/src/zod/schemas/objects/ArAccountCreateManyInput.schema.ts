import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.number().int(),
  AccountDescription: z.string().max(40)
}).strict();
export const ArAccountCreateManyInputObjectSchema: z.ZodType<Prisma.ArAccountCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountCreateManyInput>;
export const ArAccountCreateManyInputObjectZodSchema = makeSchema();
