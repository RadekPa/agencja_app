import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArApplyOrderByRelationAggregateInputObjectSchema as ArApplyOrderByRelationAggregateInputObjectSchema } from './ArApplyOrderByRelationAggregateInput.schema';
import { ArTransactionDetailOrderByRelationAggregateInputObjectSchema as ArTransactionDetailOrderByRelationAggregateInputObjectSchema } from './ArTransactionDetailOrderByRelationAggregateInput.schema';
import { ArTransferDetailOrderByRelationAggregateInputObjectSchema as ArTransferDetailOrderByRelationAggregateInputObjectSchema } from './ArTransferDetailOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  TransactionID: SortOrderSchema.optional(),
  DefaultDocRef: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  InvNr: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TransactionDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TransactionType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Currency: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TransactionAmt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RCustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PCustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RBalance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PBalance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  IFTBalance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalBalance: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ClientReference: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OurBankTransRef: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NetDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  IsChargeInterest: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ReversalTransID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OriginTransID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EntryDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  OriginUserID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ErrorID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CreditID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ApplyID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxValue: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ArApply: z.lazy(() => ArApplyOrderByRelationAggregateInputObjectSchema).optional(),
  ArTransactionDetail: z.lazy(() => ArTransactionDetailOrderByRelationAggregateInputObjectSchema).optional(),
  ArTransferDetail: z.lazy(() => ArTransferDetailOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ArTransactionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ArTransactionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionOrderByWithRelationInput>;
export const ArTransactionOrderByWithRelationInputObjectZodSchema = makeSchema();
