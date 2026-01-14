import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutDictLanguagesInputObjectSchema as tblAgreementsCreateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsCreateWithoutDictLanguagesInput.schema';
import { tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutDictLanguagesInput>;
export const tblAgreementsCreateOrConnectWithoutDictLanguagesInputObjectZodSchema = makeSchema();
