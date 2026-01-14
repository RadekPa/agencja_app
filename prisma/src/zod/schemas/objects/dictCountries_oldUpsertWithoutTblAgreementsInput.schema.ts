import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldUpdateWithoutTblAgreementsInputObjectSchema as dictCountries_oldUpdateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUpdateWithoutTblAgreementsInput.schema';
import { dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectSchema as dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUncheckedUpdateWithoutTblAgreementsInput.schema';
import { dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema as dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldCreateWithoutTblAgreementsInput.schema';
import { dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUncheckedCreateWithoutTblAgreementsInput.schema';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './dictCountries_oldWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictCountries_oldUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema)]),
  where: z.lazy(() => dictCountries_oldWhereInputObjectSchema).optional()
}).strict();
export const dictCountries_oldUpsertWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUpsertWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUpsertWithoutTblAgreementsInput>;
export const dictCountries_oldUpsertWithoutTblAgreementsInputObjectZodSchema = makeSchema();
