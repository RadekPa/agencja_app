import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsScalarWhereInputObjectSchema as tblAgreementsScalarWhereInputObjectSchema } from './tblAgreementsScalarWhereInput.schema';
import { tblAgreementsUpdateManyMutationInputObjectSchema as tblAgreementsUpdateManyMutationInputObjectSchema } from './tblAgreementsUpdateManyMutationInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgreementsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutDictCountries_oldInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateManyWithWhereWithoutDictCountries_oldInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateManyWithWhereWithoutDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateManyWithWhereWithoutDictCountries_oldInput>;
export const tblAgreementsUpdateManyWithWhereWithoutDictCountries_oldInputObjectZodSchema = makeSchema();
