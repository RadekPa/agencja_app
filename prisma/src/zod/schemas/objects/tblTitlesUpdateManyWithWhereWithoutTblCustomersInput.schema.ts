import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesScalarWhereInputObjectSchema as tblTitlesScalarWhereInputObjectSchema } from './tblTitlesScalarWhereInput.schema';
import { tblTitlesUpdateManyMutationInputObjectSchema as tblTitlesUpdateManyMutationInputObjectSchema } from './tblTitlesUpdateManyMutationInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutTblCustomersInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutTblCustomersInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitlesUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateManyWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblTitlesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateManyWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateManyWithWhereWithoutTblCustomersInput>;
export const tblTitlesUpdateManyWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
