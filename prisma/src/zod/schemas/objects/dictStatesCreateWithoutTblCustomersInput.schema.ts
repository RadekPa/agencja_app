import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldCreateNestedOneWithoutDictStatesInputObjectSchema as dictCountries_oldCreateNestedOneWithoutDictStatesInputObjectSchema } from './dictCountries_oldCreateNestedOneWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  StateID: z.number().int().optional(),
  StateAbb: z.string().max(2),
  StateName: z.string().max(30),
  dictCountries_old: z.lazy(() => dictCountries_oldCreateNestedOneWithoutDictStatesInputObjectSchema).optional()
}).strict();
export const dictStatesCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictStatesCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCreateWithoutTblCustomersInput>;
export const dictStatesCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
