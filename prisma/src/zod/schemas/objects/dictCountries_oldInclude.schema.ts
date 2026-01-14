import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesFindManySchema as dictStatesFindManySchema } from '../findManydictStates.schema';
import { tblAgreementsFindManySchema as tblAgreementsFindManySchema } from '../findManytblAgreements.schema';
import { DictCountries_oldCountOutputTypeArgsObjectSchema as DictCountries_oldCountOutputTypeArgsObjectSchema } from './DictCountries_oldCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  dictStates: z.union([z.boolean(), z.lazy(() => dictStatesFindManySchema)]).optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictCountries_oldCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictCountries_oldIncludeObjectSchema: z.ZodType<Prisma.dictCountries_oldInclude> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldInclude>;
export const dictCountries_oldIncludeObjectZodSchema = makeSchema();
