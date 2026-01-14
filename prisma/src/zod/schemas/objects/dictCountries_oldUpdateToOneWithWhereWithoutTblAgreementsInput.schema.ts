import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './dictCountries_oldWhereInput.schema';
import { dictCountries_oldUpdateWithoutTblAgreementsInputObjectSchema as dictCountries_oldUpdateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUpdateWithoutTblAgreementsInput.schema';
import { dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectSchema as dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCountries_oldWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictCountries_oldUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const dictCountries_oldUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUpdateToOneWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUpdateToOneWithWhereWithoutTblAgreementsInput>;
export const dictCountries_oldUpdateToOneWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
