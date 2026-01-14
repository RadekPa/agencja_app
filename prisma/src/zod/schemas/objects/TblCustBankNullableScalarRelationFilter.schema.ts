import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustBankWhereInputObjectSchema as tblCustBankWhereInputObjectSchema } from './tblCustBankWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tblCustBankWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => tblCustBankWhereInputObjectSchema).optional().nullable()
}).strict();
export const TblCustBankNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TblCustBankNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TblCustBankNullableScalarRelationFilter>;
export const TblCustBankNullableScalarRelationFilterObjectZodSchema = makeSchema();
