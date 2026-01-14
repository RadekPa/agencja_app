import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.string().max(3),
  ArTypeDescription: z.string().max(40).optional().nullable(),
  ArTypeDescriptionPL: z.string().max(50).optional().nullable()
}).strict();
export const ArTypeCreateInputObjectSchema: z.ZodType<Prisma.ArTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTypeCreateInput>;
export const ArTypeCreateInputObjectZodSchema = makeSchema();
