import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  status: z.string().max(32).optional(),
  createdAt: z.coerce.date().optional(),
  clientId: z.number().int()
}).strict();
export const DocumentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DocumentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentUncheckedCreateInput>;
export const DocumentUncheckedCreateInputObjectZodSchema = makeSchema();
