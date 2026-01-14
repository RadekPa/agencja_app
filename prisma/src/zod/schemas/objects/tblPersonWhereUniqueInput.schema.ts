import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.number().int().optional()
}).strict();
export const tblPersonWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblPersonWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonWhereUniqueInput>;
export const tblPersonWhereUniqueInputObjectZodSchema = makeSchema();
