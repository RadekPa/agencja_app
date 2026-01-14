import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  VatCode: z.string().max(2),
  Description: z.string().max(50),
  VatRate: z.number(),
  DescriptionPL: z.string().max(50)
}).strict();
export const ArVatCreateManyInputObjectSchema: z.ZodType<Prisma.ArVatCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ArVatCreateManyInput>;
export const ArVatCreateManyInputObjectZodSchema = makeSchema();
