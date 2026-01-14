import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int().optional(),
  CustAbb: z.string().max(10).optional()
}).strict();
export const tblCustomersWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblCustomersWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersWhereUniqueInput>;
export const tblCustomersWhereUniqueInputObjectZodSchema = makeSchema();
