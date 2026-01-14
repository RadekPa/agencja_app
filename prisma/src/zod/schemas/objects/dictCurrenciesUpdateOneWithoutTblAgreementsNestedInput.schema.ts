import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema as dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesCreateWithoutTblAgreementsInput.schema';
import { dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUncheckedCreateWithoutTblAgreementsInput.schema';
import { dictCurrenciesCreateOrConnectWithoutTblAgreementsInputObjectSchema as dictCurrenciesCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesCreateOrConnectWithoutTblAgreementsInput.schema';
import { dictCurrenciesUpsertWithoutTblAgreementsInputObjectSchema as dictCurrenciesUpsertWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUpsertWithoutTblAgreementsInput.schema';
import { dictCurrenciesWhereInputObjectSchema as dictCurrenciesWhereInputObjectSchema } from './dictCurrenciesWhereInput.schema';
import { dictCurrenciesWhereUniqueInputObjectSchema as dictCurrenciesWhereUniqueInputObjectSchema } from './dictCurrenciesWhereUniqueInput.schema';
import { dictCurrenciesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema as dictCurrenciesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUpdateToOneWithWhereWithoutTblAgreementsInput.schema';
import { dictCurrenciesUpdateWithoutTblAgreementsInputObjectSchema as dictCurrenciesUpdateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUpdateWithoutTblAgreementsInput.schema';
import { dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './dictCurrenciesUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCurrenciesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCurrenciesCreateOrConnectWithoutTblAgreementsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictCurrenciesUpsertWithoutTblAgreementsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictCurrenciesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictCurrenciesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictCurrenciesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictCurrenciesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCurrenciesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictCurrenciesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]).optional()
}).strict();
export const dictCurrenciesUpdateOneWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.dictCurrenciesUpdateOneWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesUpdateOneWithoutTblAgreementsNestedInput>;
export const dictCurrenciesUpdateOneWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
