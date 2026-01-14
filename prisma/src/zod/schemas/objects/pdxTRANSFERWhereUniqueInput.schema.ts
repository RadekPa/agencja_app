import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Bil_nr: z.number().int().optional()
}).strict();
export const pdxTRANSFERWhereUniqueInputObjectSchema: z.ZodType<Prisma.pdxTRANSFERWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.pdxTRANSFERWhereUniqueInput>;
export const pdxTRANSFERWhereUniqueInputObjectZodSchema = makeSchema();
