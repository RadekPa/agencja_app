import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvID: z.number().int().optional()
}).strict();
export const tblAdvanceWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblAdvanceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceWhereUniqueInput>;
export const tblAdvanceWhereUniqueInputObjectZodSchema = makeSchema();
