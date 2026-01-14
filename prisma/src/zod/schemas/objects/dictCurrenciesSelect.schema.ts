import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsFindManySchema as tblAgreementsFindManySchema } from '../findManytblAgreements.schema';
import { DictCurrenciesCountOutputTypeArgsObjectSchema as DictCurrenciesCountOutputTypeArgsObjectSchema } from './DictCurrenciesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  CurrID: z.boolean().optional(),
  CurrDesc: z.boolean().optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictCurrenciesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictCurrenciesSelectObjectSchema: z.ZodType<Prisma.dictCurrenciesSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesSelect>;
export const dictCurrenciesSelectObjectZodSchema = makeSchema();
