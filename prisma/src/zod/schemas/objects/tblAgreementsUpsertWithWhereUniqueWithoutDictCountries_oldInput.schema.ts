import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithoutDictCountries_oldInputObjectSchema as tblAgreementsUpdateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUpdateWithoutDictCountries_oldInput.schema';
import { tblAgreementsUncheckedUpdateWithoutDictCountries_oldInputObjectSchema as tblAgreementsUncheckedUpdateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutDictCountries_oldInput.schema';
import { tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema as tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsCreateWithoutDictCountries_oldInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutDictCountries_oldInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema)])
}).strict();
export const tblAgreementsUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithWhereUniqueWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithWhereUniqueWithoutDictCountries_oldInput>;
export const tblAgreementsUpsertWithWhereUniqueWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
