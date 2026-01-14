import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int(),
  CustTypeID: z.number().int()
}).strict();
export const tblCustTypesCustIDCustTypeIDCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblCustTypesCustIDCustTypeIDCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCustIDCustTypeIDCompoundUniqueInput>;
export const tblCustTypesCustIDCustTypeIDCompoundUniqueInputObjectZodSchema = makeSchema();
