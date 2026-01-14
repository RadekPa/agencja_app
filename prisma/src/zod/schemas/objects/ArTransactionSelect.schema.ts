import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyFindManySchema as ArApplyFindManySchema } from '../findManyArApply.schema';
import { ArTransactionDetailFindManySchema as ArTransactionDetailFindManySchema } from '../findManyArTransactionDetail.schema';
import { ArTransferDetailFindManySchema as ArTransferDetailFindManySchema } from '../findManyArTransferDetail.schema';
import { ArTransactionCountOutputTypeArgsObjectSchema as ArTransactionCountOutputTypeArgsObjectSchema } from './ArTransactionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  TransactionID: z.boolean().optional(),
  DefaultDocRef: z.boolean().optional(),
  InvNr: z.boolean().optional(),
  TransactionDate: z.boolean().optional(),
  TransactionType: z.boolean().optional(),
  Currency: z.boolean().optional(),
  TransactionAmt: z.boolean().optional(),
  RCustID: z.boolean().optional(),
  PCustID: z.boolean().optional(),
  RBalance: z.boolean().optional(),
  PBalance: z.boolean().optional(),
  IFTBalance: z.boolean().optional(),
  GraalBalance: z.boolean().optional(),
  ClientReference: z.boolean().optional(),
  OurBankTransRef: z.boolean().optional(),
  NetDate: z.boolean().optional(),
  IsChargeInterest: z.boolean().optional(),
  Notes: z.boolean().optional(),
  ReversalTransID: z.boolean().optional(),
  OriginTransID: z.boolean().optional(),
  EntryDate: z.boolean().optional(),
  OriginUserID: z.boolean().optional(),
  ErrorID: z.boolean().optional(),
  Status: z.boolean().optional(),
  CreditID: z.boolean().optional(),
  ApplyID: z.boolean().optional(),
  TaxCode: z.boolean().optional(),
  TaxValue: z.boolean().optional(),
  ArApply: z.union([z.boolean(), z.lazy(() => ArApplyFindManySchema)]).optional(),
  ArTransactionDetail: z.union([z.boolean(), z.lazy(() => ArTransactionDetailFindManySchema)]).optional(),
  ArTransferDetail: z.union([z.boolean(), z.lazy(() => ArTransferDetailFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ArTransactionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ArTransactionSelectObjectSchema: z.ZodType<Prisma.ArTransactionSelect> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionSelect>;
export const ArTransactionSelectObjectZodSchema = makeSchema();
