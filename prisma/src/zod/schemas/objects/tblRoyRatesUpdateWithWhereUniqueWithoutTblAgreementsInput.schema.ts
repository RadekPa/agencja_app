import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesWhereUniqueInputObjectSchema as tblRoyRatesWhereUniqueInputObjectSchema } from './tblRoyRatesWhereUniqueInput.schema';
import { tblRoyRatesUpdateWithoutTblAgreementsInputObjectSchema as tblRoyRatesUpdateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUpdateWithoutTblAgreementsInput.schema';
import { tblRoyRatesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblRoyRatesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyRatesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblRoyRatesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblRoyRatesUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUpdateWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUpdateWithWhereUniqueWithoutTblAgreementsInput>;
export const tblRoyRatesUpdateWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
