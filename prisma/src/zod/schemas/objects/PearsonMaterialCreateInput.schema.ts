import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ContractID: z.number().int(),
  InvoiceNumber: z.string().max(255).optional().nullable(),
  InvoiceDate: z.coerce.date().optional().nullable(),
  Publisher: z.string().max(255).optional().nullable(),
  Title: z.string().max(255).optional().nullable(),
  ISBN: z.string().max(255).optional().nullable(),
  Amount: z.number().optional().nullable()
}).strict();
export const PearsonMaterialCreateInputObjectSchema: z.ZodType<Prisma.PearsonMaterialCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialCreateInput>;
export const PearsonMaterialCreateInputObjectZodSchema = makeSchema();
