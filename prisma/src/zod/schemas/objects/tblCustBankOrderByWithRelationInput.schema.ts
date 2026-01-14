import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './tblCustomersOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  BankName: SortOrderSchema.optional(),
  BankAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AccountNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoutingNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AccountName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const tblCustBankOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblCustBankOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustBankOrderByWithRelationInput>;
export const tblCustBankOrderByWithRelationInputObjectZodSchema = makeSchema();
