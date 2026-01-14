import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesCreateWithoutTblAgreementsInputObjectSchema as dictLanguagesCreateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesCreateWithoutTblAgreementsInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblAgreementsInput.schema';
import { dictLanguagesCreateOrConnectWithoutTblAgreementsInputObjectSchema as dictLanguagesCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './dictLanguagesCreateOrConnectWithoutTblAgreementsInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictLanguagesCreateOrConnectWithoutTblAgreementsInputObjectSchema).optional(),
  connect: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictLanguagesCreateNestedOneWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateNestedOneWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateNestedOneWithoutTblAgreementsInput>;
export const dictLanguagesCreateNestedOneWithoutTblAgreementsInputObjectZodSchema = makeSchema();
