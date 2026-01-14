import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesCustIDCustTypeIDCompoundUniqueInputObjectSchema as tblCustTypesCustIDCustTypeIDCompoundUniqueInputObjectSchema } from './tblCustTypesCustIDCustTypeIDCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  CustID_CustTypeID: z.lazy(() => tblCustTypesCustIDCustTypeIDCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblCustTypesWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblCustTypesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesWhereUniqueInput>;
export const tblCustTypesWhereUniqueInputObjectZodSchema = makeSchema();
