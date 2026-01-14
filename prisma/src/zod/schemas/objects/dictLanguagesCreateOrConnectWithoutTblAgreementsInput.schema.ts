import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema';
import { dictLanguagesCreateWithoutTblAgreementsInputObjectSchema as dictLanguagesCreateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesCreateWithoutTblAgreementsInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const dictLanguagesCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateOrConnectWithoutTblAgreementsInput>;
export const dictLanguagesCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
