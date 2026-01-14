import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema as dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldCreateWithoutTblAgreementsInput.schema';
import { dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUncheckedCreateWithoutTblAgreementsInput.schema';
import { dictCountries_oldCreateOrConnectWithoutTblAgreementsInputObjectSchema as dictCountries_oldCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldCreateOrConnectWithoutTblAgreementsInput.schema';
import { dictCountries_oldUpsertWithoutTblAgreementsInputObjectSchema as dictCountries_oldUpsertWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUpsertWithoutTblAgreementsInput.schema';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './dictCountries_oldWhereInput.schema';
import { dictCountries_oldWhereUniqueInputObjectSchema as dictCountries_oldWhereUniqueInputObjectSchema } from './dictCountries_oldWhereUniqueInput.schema';
import { dictCountries_oldUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema as dictCountries_oldUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUpdateToOneWithWhereWithoutTblAgreementsInput.schema';
import { dictCountries_oldUpdateWithoutTblAgreementsInputObjectSchema as dictCountries_oldUpdateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUpdateWithoutTblAgreementsInput.schema';
import { dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectSchema as dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './dictCountries_oldUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCountries_oldCreateOrConnectWithoutTblAgreementsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictCountries_oldUpsertWithoutTblAgreementsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictCountries_oldWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictCountries_oldWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictCountries_oldWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictCountries_oldUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCountries_oldUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCountries_oldUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]).optional()
}).strict();
export const dictCountries_oldUpdateOneWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUpdateOneWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUpdateOneWithoutTblAgreementsNestedInput>;
export const dictCountries_oldUpdateOneWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
