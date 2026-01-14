import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithoutDictCountries_oldInputObjectSchema as tblAgreementsUpdateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUpdateWithoutDictCountries_oldInput.schema';
import { tblAgreementsUncheckedUpdateWithoutDictCountries_oldInputObjectSchema as tblAgreementsUncheckedUpdateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutDictCountries_oldInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateWithWhereUniqueWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateWithWhereUniqueWithoutDictCountries_oldInput>;
export const tblAgreementsUpdateWithWhereUniqueWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
