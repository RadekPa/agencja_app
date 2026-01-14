import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateNestedManyWithoutDictStatesInputObjectSchema as tblCustomersCreateNestedManyWithoutDictStatesInputObjectSchema } from './tblCustomersCreateNestedManyWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  StateID: z.number().int().optional(),
  StateAbb: z.string().max(2),
  StateName: z.string().max(30),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedManyWithoutDictStatesInputObjectSchema).optional()
}).strict();
export const dictStatesCreateWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.dictStatesCreateWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCreateWithoutDictCountries_oldInput>;
export const dictStatesCreateWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
