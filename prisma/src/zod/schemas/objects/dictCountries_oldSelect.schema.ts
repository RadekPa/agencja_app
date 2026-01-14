import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesFindManySchema as dictStatesFindManySchema } from '../findManydictStates.schema';
import { tblAgreementsFindManySchema as tblAgreementsFindManySchema } from '../findManytblAgreements.schema';
import { DictCountries_oldCountOutputTypeArgsObjectSchema as DictCountries_oldCountOutputTypeArgsObjectSchema } from './DictCountries_oldCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  CountryID: z.boolean().optional(),
  CountryDesc: z.boolean().optional(),
  CountryPL: z.boolean().optional(),
  Tax: z.boolean().optional(),
  Code: z.boolean().optional(),
  EU: z.boolean().optional(),
  dictStates: z.union([z.boolean(), z.lazy(() => dictStatesFindManySchema)]).optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictCountries_oldCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictCountries_oldSelectObjectSchema: z.ZodType<Prisma.dictCountries_oldSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldSelect>;
export const dictCountries_oldSelectObjectZodSchema = makeSchema();
