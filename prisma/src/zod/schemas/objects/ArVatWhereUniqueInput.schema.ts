import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  VatCode: z.string().max(2).optional()
}).strict();
export const ArVatWhereUniqueInputObjectSchema: z.ZodType<Prisma.ArVatWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ArVatWhereUniqueInput>;
export const ArVatWhereUniqueInputObjectZodSchema = makeSchema();
