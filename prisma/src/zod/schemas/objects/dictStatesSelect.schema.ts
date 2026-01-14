import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldArgsObjectSchema as dictCountries_oldArgsObjectSchema } from './dictCountries_oldArgs.schema';
import { tblCustomersFindManySchema as tblCustomersFindManySchema } from '../findManytblCustomers.schema';
import { DictStatesCountOutputTypeArgsObjectSchema as DictStatesCountOutputTypeArgsObjectSchema } from './DictStatesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  StateID: z.boolean().optional(),
  CountryID: z.boolean().optional(),
  StateAbb: z.boolean().optional(),
  StateName: z.boolean().optional(),
  dictCountries_old: z.union([z.boolean(), z.lazy(() => dictCountries_oldArgsObjectSchema)]).optional(),
  tblCustomers: z.union([z.boolean(), z.lazy(() => tblCustomersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DictStatesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const dictStatesSelectObjectSchema: z.ZodType<Prisma.dictStatesSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesSelect>;
export const dictStatesSelectObjectZodSchema = makeSchema();
