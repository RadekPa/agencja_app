import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.number().int(),
  Login: z.string().max(30),
  DateBegin: z.coerce.date().optional().nullable(),
  DateEnd: z.coerce.date().optional().nullable()
}).strict();
export const tblPersonLoginCreateInputObjectSchema: z.ZodType<Prisma.tblPersonLoginCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginCreateInput>;
export const tblPersonLoginCreateInputObjectZodSchema = makeSchema();
