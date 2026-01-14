import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsFindManySchema as tblAgreementsFindManySchema } from '../findManytblAgreements.schema';
import { DictCurrenciesCountOutputTypeArgsObjectSchema as DictCurrenciesCountOutputTypeArgsObjectSchema } from './DictCurrenciesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictCurrenciesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictCurrenciesIncludeObjectSchema: z.ZodType<Prisma.dictCurrenciesInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesInclude>;
export const dictCurrenciesIncludeObjectZodSchema = makeSchema();
