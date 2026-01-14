import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsScalarWhereInputObjectSchema as tblAgreementsScalarWhereInputObjectSchema } from './tblAgreementsScalarWhereInput.schema';
import { tblAgreementsUpdateManyMutationInputObjectSchema as tblAgreementsUpdateManyMutationInputObjectSchema } from './tblAgreementsUpdateManyMutationInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgreementsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateManyWithWhereWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateManyWithWhereWithoutDictLanguagesInput>;
export const tblAgreementsUpdateManyWithWhereWithoutDictLanguagesInputObjectZodSchema = makeSchema();
