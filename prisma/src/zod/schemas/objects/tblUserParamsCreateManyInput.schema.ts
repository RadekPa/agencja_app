import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string().max(30),
  Name: z.string().max(30),
  Value: z.string().max(300)
}).strict();
export const tblUserParamsCreateManyInputObjectSchema: z.ZodType<Prisma.tblUserParamsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsCreateManyInput>;
export const tblUserParamsCreateManyInputObjectZodSchema = makeSchema();
