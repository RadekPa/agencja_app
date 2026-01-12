import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const SimpleInvoiceWhereUniqueInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SimpleInvoiceWhereUniqueInput>;
export const SimpleInvoiceWhereUniqueInputObjectZodSchema = makeSchema();
