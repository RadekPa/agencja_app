import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsScalarWhereInputObjectSchema as tblAgreementsScalarWhereInputObjectSchema } from './tblAgreementsScalarWhereInput.schema';
import { tblAgreementsUpdateManyMutationInputObjectSchema as tblAgreementsUpdateManyMutationInputObjectSchema } from './tblAgreementsUpdateManyMutationInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutDictCurrenciesInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutDictCurrenciesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgreementsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutDictCurrenciesInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateManyWithWhereWithoutDictCurrenciesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateManyWithWhereWithoutDictCurrenciesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateManyWithWhereWithoutDictCurrenciesInput>;
export const tblAgreementsUpdateManyWithWhereWithoutDictCurrenciesInputObjectZodSchema = makeSchema();
