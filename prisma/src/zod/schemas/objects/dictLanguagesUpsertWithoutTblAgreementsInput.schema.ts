import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesUpdateWithoutTblAgreementsInputObjectSchema as dictLanguagesUpdateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUpdateWithoutTblAgreementsInput.schema';
import { dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutTblAgreementsInput.schema';
import { dictLanguagesCreateWithoutTblAgreementsInputObjectSchema as dictLanguagesCreateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesCreateWithoutTblAgreementsInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblAgreementsInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictLanguagesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema)]),
  where: z.lazy(() => dictLanguagesWhereInputObjectSchema).optional()
}).strict();
export const dictLanguagesUpsertWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpsertWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpsertWithoutTblAgreementsInput>;
export const dictLanguagesUpsertWithoutTblAgreementsInputObjectZodSchema = makeSchema();
