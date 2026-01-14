import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuxWhereInputObjectSchema as tblTitAuxWhereInputObjectSchema } from './tblTitAuxWhereInput.schema';
import { tblTitAuxUpdateWithoutTblTitlesInputObjectSchema as tblTitAuxUpdateWithoutTblTitlesInputObjectSchema } from './tblTitAuxUpdateWithoutTblTitlesInput.schema';
import { tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblTitAuxUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitAuxWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblTitAuxUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitAuxUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuxUpdateToOneWithWhereWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxUpdateToOneWithWhereWithoutTblTitlesInput>;
export const tblTitAuxUpdateToOneWithWhereWithoutTblTitlesInputObjectZodSchema = makeSchema();
