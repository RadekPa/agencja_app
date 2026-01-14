import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './tblRoyRatesWhereUniqueInput.schema';
import { tblRoyRatesUpdateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUpdateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUpdateWithoutTblAgrRightsInput.schema';
import { tblRoyRatesUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUncheckedUpdateWithoutTblAgrRightsInput.schema';
import { tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesCreateWithoutTblAgrRightsInput.schema';
import { tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUncheckedCreateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblRoyRatesUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblRoyRatesCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const tblRoyRatesUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUpsertWithWhereUniqueWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUpsertWithWhereUniqueWithoutTblAgrRightsInput>;
export const tblRoyRatesUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
