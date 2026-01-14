import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmID: z.number().int().optional()
}).strict();
export const tblSubmissionsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblSubmissionsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsWhereUniqueInput>;
export const tblSubmissionsWhereUniqueInputObjectZodSchema = makeSchema();
