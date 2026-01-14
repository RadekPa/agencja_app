import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema as dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldCreateWithoutTblAgreementsInput.schema';
import { dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUncheckedCreateWithoutTblAgreementsInput.schema';
import { dictCountries_oldCreateOrConnectWithoutTblAgreementsInputObjectSchema as dictCountries_oldCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldCreateOrConnectWithoutTblAgreementsInput.schema';
import { dictCountries_oldWhereUniqueInputObjectSchema as dictCountries_oldWhereUniqueInputObjectSchema } from './dictCountries_oldWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCountries_oldCreateOrConnectWithoutTblAgreementsInputObjectSchema).optional(),
  connect: z.lazy(() => dictCountries_oldWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictCountries_oldCreateNestedOneWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCountries_oldCreateNestedOneWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldCreateNestedOneWithoutTblAgreementsInput>;
export const dictCountries_oldCreateNestedOneWithoutTblAgreementsInputObjectZodSchema = makeSchema();
