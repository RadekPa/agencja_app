import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string().max(30),
  Name: z.string().max(30),
  Value: z.string().max(300)
}).strict();
export const tblUserParamsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblUserParamsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUncheckedCreateInput>;
export const tblUserParamsUncheckedCreateInputObjectZodSchema = makeSchema();
