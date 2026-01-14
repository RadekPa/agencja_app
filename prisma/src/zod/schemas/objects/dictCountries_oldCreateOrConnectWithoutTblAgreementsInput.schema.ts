import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldWhereUniqueInputObjectSchema as dictCountries_oldWhereUniqueInputObjectSchema } from './dictCountries_oldWhereUniqueInput.schema';
import { dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema as dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldCreateWithoutTblAgreementsInput.schema';
import { dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCountries_oldWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const dictCountries_oldCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCountries_oldCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldCreateOrConnectWithoutTblAgreementsInput>;
export const dictCountries_oldCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
