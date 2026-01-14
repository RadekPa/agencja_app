import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.number().int(),
  AccountDescription: z.string().max(40)
}).strict();
export const ArAccountUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ArAccountUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountUncheckedCreateInput>;
export const ArAccountUncheckedCreateInputObjectZodSchema = makeSchema();
