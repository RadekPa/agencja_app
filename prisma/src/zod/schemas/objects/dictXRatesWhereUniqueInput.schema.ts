import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictXRatesCurrIDCurrDateCompoundUniqueInputObjectSchema as dictXRatesCurrIDCurrDateCompoundUniqueInputObjectSchema } from './dictXRatesCurrIDCurrDateCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  CurrID_CurrDate: z.lazy(() => dictXRatesCurrIDCurrDateCompoundUniqueInputObjectSchema).optional()
}).strict();
export const dictXRatesWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictXRatesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesWhereUniqueInput>;
export const dictXRatesWhereUniqueInputObjectZodSchema = makeSchema();
