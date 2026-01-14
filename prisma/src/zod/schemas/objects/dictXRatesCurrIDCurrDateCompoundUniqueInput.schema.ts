import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.string(),
  CurrDate: z.date()
}).strict();
export const dictXRatesCurrIDCurrDateCompoundUniqueInputObjectSchema: z.ZodType<Prisma.dictXRatesCurrIDCurrDateCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesCurrIDCurrDateCompoundUniqueInput>;
export const dictXRatesCurrIDCurrDateCompoundUniqueInputObjectZodSchema = makeSchema();
