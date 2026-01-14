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
export const PearsonMaterialCreateManyInputObjectSchema: z.ZodType<Prisma.PearsonMaterialCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialCreateManyInput>;
export const PearsonMaterialCreateManyInputObjectZodSchema = makeSchema();
