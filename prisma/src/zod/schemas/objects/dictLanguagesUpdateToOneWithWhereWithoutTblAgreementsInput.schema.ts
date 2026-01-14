import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { dictLanguagesUpdateWithoutTblAgreementsInputObjectSchema as dictLanguagesUpdateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUpdateWithoutTblAgreementsInput.schema';
import { dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictLanguagesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictLanguagesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const dictLanguagesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpdateToOneWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpdateToOneWithWhereWithoutTblAgreementsInput>;
export const dictLanguagesUpdateToOneWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
