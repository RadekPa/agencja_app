import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Step: z.number().int(),
  AgrRightID: z.number().int(),
  AgrID: z.number().int().optional().nullable(),
  CpsMax: z.number().int().optional().nullable(),
  Rate: z.number().optional().nullable()
}).strict();
export const tblRoyRatesCreateManyInputObjectSchema: z.ZodType<Prisma.tblRoyRatesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesCreateManyInput>;
export const tblRoyRatesCreateManyInputObjectZodSchema = makeSchema();
