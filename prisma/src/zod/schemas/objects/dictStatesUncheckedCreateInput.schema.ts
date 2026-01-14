import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUncheckedCreateNestedManyWithoutDictStatesInputObjectSchema as tblCustomersUncheckedCreateNestedManyWithoutDictStatesInputObjectSchema } from './tblCustomersUncheckedCreateNestedManyWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  StateID: z.number().int().optional(),
  CountryID: z.number().int().optional().nullable(),
  StateAbb: z.string().max(2),
  StateName: z.string().max(30),
  tblCustomers: z.lazy(() => tblCustomersUncheckedCreateNestedManyWithoutDictStatesInputObjectSchema).optional()
}).strict();
export const dictStatesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictStatesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUncheckedCreateInput>;
export const dictStatesUncheckedCreateInputObjectZodSchema = makeSchema();
