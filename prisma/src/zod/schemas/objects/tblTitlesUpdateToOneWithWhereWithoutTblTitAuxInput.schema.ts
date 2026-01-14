import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { tblTitlesUpdateWithoutTblTitAuxInputObjectSchema as tblTitlesUpdateWithoutTblTitAuxInputObjectSchema } from './tblTitlesUpdateWithoutTblTitAuxInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitAuxInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitAuxInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitAuxInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblTitlesUpdateWithoutTblTitAuxInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitAuxInputObjectSchema)])
}).strict();
export const tblTitlesUpdateToOneWithWhereWithoutTblTitAuxInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblTitAuxInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblTitAuxInput>;
export const tblTitlesUpdateToOneWithWhereWithoutTblTitAuxInputObjectZodSchema = makeSchema();
