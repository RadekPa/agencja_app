import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithoutDictLanguagesInputObjectSchema as tblAgreementsUpdateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUpdateWithoutDictLanguagesInput.schema';
import { tblAgreementsUncheckedUpdateWithoutDictLanguagesInputObjectSchema as tblAgreementsUncheckedUpdateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutDictLanguagesInput.schema';
import { tblAgreementsCreateWithoutDictLanguagesInputObjectSchema as tblAgreementsCreateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsCreateWithoutDictLanguagesInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutDictLanguagesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblAgreementsUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithWhereUniqueWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithWhereUniqueWithoutDictLanguagesInput>;
export const tblAgreementsUpsertWithWhereUniqueWithoutDictLanguagesInputObjectZodSchema = makeSchema();
