import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int().optional()
}).strict();
export const tblCustBankWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblCustBankWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankWhereUniqueInput>;
export const tblCustBankWhereUniqueInputObjectZodSchema = makeSchema();
