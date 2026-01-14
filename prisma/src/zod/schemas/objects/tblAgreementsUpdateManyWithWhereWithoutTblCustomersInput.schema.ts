import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsScalarWhereInputObjectSchema as tblAgreementsScalarWhereInputObjectSchema } from './tblAgreementsScalarWhereInput.schema';
import { tblAgreementsUpdateManyMutationInputObjectSchema as tblAgreementsUpdateManyMutationInputObjectSchema } from './tblAgreementsUpdateManyMutationInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgreementsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateManyWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateManyWithWhereWithoutTblCustomersInput>;
export const tblAgreementsUpdateManyWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
