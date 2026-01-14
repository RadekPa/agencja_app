import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithoutDictLanguagesInputObjectSchema as tblAgreementsUpdateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUpdateWithoutDictLanguagesInput.schema';
import { tblAgreementsUncheckedUpdateWithoutDictLanguagesInputObjectSchema as tblAgreementsUncheckedUpdateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateWithWhereUniqueWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateWithWhereUniqueWithoutDictLanguagesInput>;
export const tblAgreementsUpdateWithWhereUniqueWithoutDictLanguagesInputObjectZodSchema = makeSchema();
