import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUncheckedCreateNestedManyWithoutDictStatesInputObjectSchema as tblCustomersUncheckedCreateNestedManyWithoutDictStatesInputObjectSchema } from './tblCustomersUncheckedCreateNestedManyWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  StateID: z.number().int().optional(),
  StateAbb: z.string(),
  StateName: z.string(),
  tblCustomers: z.lazy(() => tblCustomersUncheckedCreateNestedManyWithoutDictStatesInputObjectSchema).optional()
}).strict();
export const dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.dictStatesUncheckedCreateWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUncheckedCreateWithoutDictCountries_oldInput>;
export const dictStatesUncheckedCreateWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
