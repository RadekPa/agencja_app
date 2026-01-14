import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { tblTitlesUpdateWithoutTblTitSubClassInputObjectSchema as tblTitlesUpdateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUpdateWithoutTblTitSubClassInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitSubClassInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblTitlesUpdateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitSubClassInputObjectSchema)])
}).strict();
export const tblTitlesUpdateToOneWithWhereWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblTitSubClassInput>;
export const tblTitlesUpdateToOneWithWhereWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
