import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { tblTitlesUpdateWithoutTblTitAuthorsInputObjectSchema as tblTitlesUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUpdateWithoutTblTitAuthorsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitAuthorsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblTitlesUpdateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema)])
}).strict();
export const tblTitlesUpdateToOneWithWhereWithoutTblTitAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblTitAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblTitAuthorsInput>;
export const tblTitlesUpdateToOneWithWhereWithoutTblTitAuthorsInputObjectZodSchema = makeSchema();
