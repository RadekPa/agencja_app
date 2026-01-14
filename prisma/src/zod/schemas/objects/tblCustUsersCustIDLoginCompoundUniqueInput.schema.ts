import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int(),
  Login: z.string()
}).strict();
export const tblCustUsersCustIDLoginCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblCustUsersCustIDLoginCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCustIDLoginCompoundUniqueInput>;
export const tblCustUsersCustIDLoginCompoundUniqueInputObjectZodSchema = makeSchema();
