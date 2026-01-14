import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesCreateWithoutTblAgreementsInputObjectSchema as dictLanguagesCreateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesCreateWithoutTblAgreementsInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblAgreementsInput.schema';
import { dictLanguagesCreateOrConnectWithoutTblAgreementsInputObjectSchema as dictLanguagesCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './dictLanguagesCreateOrConnectWithoutTblAgreementsInput.schema';
import { dictLanguagesUpsertWithoutTblAgreementsInputObjectSchema as dictLanguagesUpsertWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUpsertWithoutTblAgreementsInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema';
import { dictLanguagesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema as dictLanguagesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUpdateToOneWithWhereWithoutTblAgreementsInput.schema';
import { dictLanguagesUpdateWithoutTblAgreementsInputObjectSchema as dictLanguagesUpdateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUpdateWithoutTblAgreementsInput.schema';
import { dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictLanguagesCreateOrConnectWithoutTblAgreementsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictLanguagesUpsertWithoutTblAgreementsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictLanguagesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictLanguagesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]).optional()
}).strict();
export const dictLanguagesUpdateOneWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpdateOneWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpdateOneWithoutTblAgreementsNestedInput>;
export const dictLanguagesUpdateOneWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
