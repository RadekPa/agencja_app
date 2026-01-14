import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema as tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsCreateWithoutDictCountries_oldInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictCountries_oldInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutDictCountries_oldInput>;
export const tblAgreementsCreateOrConnectWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
