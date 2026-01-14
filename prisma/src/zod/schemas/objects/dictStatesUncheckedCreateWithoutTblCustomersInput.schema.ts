import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  StateID: z.number().int().optional(),
  CountryID: z.number().int().optional().nullable(),
  StateAbb: z.string(),
  StateName: z.string()
}).strict();
export const dictStatesUncheckedCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictStatesUncheckedCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUncheckedCreateWithoutTblCustomersInput>;
export const dictStatesUncheckedCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
