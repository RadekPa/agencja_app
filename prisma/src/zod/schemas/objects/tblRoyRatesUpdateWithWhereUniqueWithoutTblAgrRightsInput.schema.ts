import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './tblRoyRatesWhereUniqueInput.schema';
import { tblRoyRatesUpdateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUpdateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUpdateWithoutTblAgrRightsInput.schema';
import { tblRoyRatesUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblRoyRatesUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const tblRoyRatesUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUpdateWithWhereUniqueWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUpdateWithWhereUniqueWithoutTblAgrRightsInput>;
export const tblRoyRatesUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
