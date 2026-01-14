import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldCreateNestedOneWithoutDictStatesInputObjectSchema as dictCountries_oldCreateNestedOneWithoutDictStatesInputObjectSchema } from './dictCountries_oldCreateNestedOneWithoutDictStatesInput.schema';
import { tblCustomersCreateNestedManyWithoutDictStatesInputObjectSchema as tblCustomersCreateNestedManyWithoutDictStatesInputObjectSchema } from './tblCustomersCreateNestedManyWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  StateID: z.number().int().optional(),
  StateAbb: z.string().max(2),
  StateName: z.string().max(30),
  dictCountries_old: z.lazy(() => dictCountries_oldCreateNestedOneWithoutDictStatesInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedManyWithoutDictStatesInputObjectSchema).optional()
}).strict();
export const dictStatesCreateInputObjectSchema: z.ZodType<Prisma.dictStatesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCreateInput>;
export const dictStatesCreateInputObjectZodSchema = makeSchema();
