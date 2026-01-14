import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MyNumber: z.boolean().optional(),
  ContractID: z.boolean().optional(),
  InvoiceNumber: z.boolean().optional(),
  InvoiceDate: z.boolean().optional(),
  Publisher: z.boolean().optional(),
  Title: z.boolean().optional(),
  ISBN: z.boolean().optional(),
  Amount: z.boolean().optional()
}).strict();
export const PearsonMaterialSelectObjectSchema: z.ZodType<Prisma.PearsonMaterialSelect> = makeSchema() as unknown as z.ZodType<Prisma.PearsonMaterialSelect>;
export const PearsonMaterialSelectObjectZodSchema = makeSchema();
