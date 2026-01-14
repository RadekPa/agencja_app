import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './tblRoyRatesWhereUniqueInput.schema';
import { tblRoyRatesUpdateWithoutTblAgreementsInputObjectSchema as tblRoyRatesUpdateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUpdateWithoutTblAgreementsInput.schema';
import { tblRoyRatesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblRoyRatesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUncheckedUpdateWithoutTblAgreementsInput.schema';
import { tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema as tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesCreateWithoutTblAgreementsInput.schema';
import { tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblRoyRatesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblRoyRatesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblRoyRatesUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUpsertWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUpsertWithWhereUniqueWithoutTblAgreementsInput>;
export const tblRoyRatesUpsertWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
